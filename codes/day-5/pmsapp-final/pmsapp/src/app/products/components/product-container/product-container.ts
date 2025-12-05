import { Component } from '@angular/core';
import { ProductFilter } from '../product-filter/product-filter';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product-container',
  imports: [ProductFilter, ProductList],
  templateUrl: './product-container.html',
  styleUrl: './product-container.css',
})
export class ProductContainer {
  textToFilter = ''

  receiveUpdatedTextToFilter(newFilterText: string) {
    this.textToFilter = newFilterText
  }
}
