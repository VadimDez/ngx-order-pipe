import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderPipe implements PipeTransform {

  /**
   * Check if a value is a string
   *
   * @param value
   */
  static isString(value: any) {
    return typeof value === 'string' || value instanceof String;
  }

  /**
   * Sorts values ignoring the case
   *
   * @param a
   * @param b
   */
  static caseInsensitiveSort(a: any, b: any) {
    if (OrderPipe.isString(a) && OrderPipe.isString(b)) {
      return a.localeCompare(b);
    }
    return a > b ? 1 : -1;
  }

  /**
   * Parse expression, split into items
   * @param expression
   * @returns {string[]}
   */
  static parseExpression(expression: string): string[] {
    expression = expression.replace(/\[(\w+)\]/g, '.$1');
    expression = expression.replace(/^\./, '');
    return expression.split('.');
  }

  /**
   * Get value by expression
   *
   * @param object
   * @param expression
   * @returns {any}
   */
  static getValue(object: any, expression: string[]) {
    for (let i = 0, n = expression.length; i < n; ++i) {
      const k = expression[i];
      if (!(k in object)) {
        return;
      }
      object = object[k];
    }

    return object;
  }

  /**
   * Set value by expression
   *
   * @param object
   * @param value
   * @param expression
   */
  static setValue(object: any, value: any, expression: string[]) {
    let i;
    for (i = 0; i < expression.length - 1; i++) {
      object = object[expression[i]];
    }

    object[expression[i]] = value;
  }

  transform(value: any | any[], expression?: any, reverse?: boolean, isCaseInsensitive: boolean = false): any {
    if (!value) {
      return value;
    }
    
    if (Array.isArray(value)) {
      return this.sortArray(value, expression, reverse, isCaseInsensitive);
    }
    
    if (typeof value === 'object') {
      return this.transformObject(value, expression, reverse, isCaseInsensitive);
    }

    return value;
  }

  /**
   * Sort array
   *
   * @param value
   * @param expression
   * @param reverse
   * @param isCaseInsensitive
   * @returns {any[]}
   */
  private sortArray(value: any[], expression?: any, reverse?: boolean, isCaseInsensitive?: boolean): any[] {
    const isDeepLink = expression && expression.indexOf('.') !== -1;
    if (isDeepLink) {
      expression = OrderPipe.parseExpression(expression);
    }

    let array: any[] = value.sort((a: any, b: any): number => {
      if (!expression) {
        if (isCaseInsensitive) {
          return OrderPipe.caseInsensitiveSort(a, b);
        }
        return a > b ? 1 : -1;
      }

      if (!isDeepLink && expression) {
        if (isCaseInsensitive) {
          if (a && b) {
            return OrderPipe.caseInsensitiveSort(a[expression], b[expression]);
          }
          return OrderPipe.caseInsensitiveSort(a, b);
        }
        
        if (a && b) {
          return a[expression] > b[expression] ? 1 : -1;
        }
        return a > b ? 1 : -1;
      }

      if (isCaseInsensitive) {
        return OrderPipe.caseInsensitiveSort(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
      }

      return OrderPipe.getValue(a, expression) > OrderPipe.getValue(b, expression) ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }


  /**
   * Transform Object
   *
   * @param value
   * @param expression
   * @param reverse
   * @param isCaseInsensitive
   * @returns {any[]}
   */
  private transformObject(value: any | any[], expression?: any, reverse?: boolean, isCaseInsensitive?: boolean): any {

    let parsedExpression = OrderPipe.parseExpression(expression);
    let lastPredicate = parsedExpression.pop();
    let oldValue = OrderPipe.getValue(value, parsedExpression);

    if (!Array.isArray(oldValue)) {
      parsedExpression.push(lastPredicate);
      lastPredicate = null;
      oldValue = OrderPipe.getValue(value, parsedExpression);
    }

    if (!oldValue) {
      return value;
    }

    OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
    return value;
  }
}
