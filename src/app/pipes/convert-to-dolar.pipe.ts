import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToDolar'
})
export class ConvertToDolarPipe implements PipeTransform {

  private cambio = 0.98;

  transform(value: number): string {
    return (value / this.cambio).toFixed(2).toString();
  }

}
