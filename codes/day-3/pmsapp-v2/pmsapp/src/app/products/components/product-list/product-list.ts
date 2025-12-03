import { Component, Inject, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productRecords: Product[] = []
  @Input('filterText') filterTextValue = ''

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private readonly productSvc: ProductService) {
    this.productRecords = this.productSvc.getProducts()
  }
}
