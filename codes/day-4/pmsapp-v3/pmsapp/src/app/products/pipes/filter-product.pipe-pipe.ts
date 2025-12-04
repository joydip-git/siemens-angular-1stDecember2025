import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product';

@Pipe({
  name: 'filterProductPipe',
})
export class FilterProductPipePipe implements PipeTransform {

  transform(value: Product[] | undefined, ...args: string[]): Product[] | undefined {
    return (args[0] && args[0] !== '' && value) ? value.filter(p => p.productName.toLocaleLowerCase().includes(args[0].toLocaleLowerCase())) : value;
  }
}
