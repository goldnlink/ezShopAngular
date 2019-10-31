import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'turcMuch'
})
export class TurcMuchPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length <= 3) {
      return value.toUpperCase();
    } else {
      return value.substring(0, 3).toUpperCase() + value.substring(3).toLowerCase();
    }
  }

}
