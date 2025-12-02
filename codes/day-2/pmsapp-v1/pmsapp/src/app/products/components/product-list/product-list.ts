import { Component, Input } from '@angular/core';
import { products } from '../../../repository/products';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productRecords = products
  @Input() filterText = ''
}
