import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class Ng2OrderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a: any, b: any): number => {
      return a[args] > b[args] ? 1 : -1;
    });
  }

}
