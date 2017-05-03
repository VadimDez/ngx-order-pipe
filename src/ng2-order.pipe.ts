import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class Ng2OrderPipe implements PipeTransform {

  transform(value: any[], expression?: any, reverse?: boolean): any {
    if (!value) {
      return value;
    }

    let array: any[] = value.sort((a: any, b: any): number => {
      if (!expression) {
        return a > b ? 1 : -1;
      }

      return a[expression] > b[expression] ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }
}
