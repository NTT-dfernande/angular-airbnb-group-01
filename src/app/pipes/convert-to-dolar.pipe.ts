import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDolar'
})
export class ConvertToDolarPipe implements PipeTransform {

  private change = 0.98;

  transform(value: number): string {
    return (value / this.change).toFixed(2).toString();
  }

}
