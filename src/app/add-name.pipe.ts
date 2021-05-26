import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addName'
})
export class AddNamePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let val = value + ' Abhishek';
    return val;
  }
}
