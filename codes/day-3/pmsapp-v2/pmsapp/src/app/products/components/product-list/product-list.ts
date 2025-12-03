import { Component, Inject, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  productRecords?: Product[];
  isLoadingComplete = false
  errorInfo = ''

  @Input('filterText') filterTextValue = ''

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private readonly productSvc: ProductService) {

  }

  ngOnInit(): void {
    try {
      this.productRecords = this.productSvc.getProducts()
      this.isLoadingComplete = true
      this.errorInfo = ''
    } catch (error: any) {
      this.productRecords = undefined
      this.isLoadingComplete = true
      this.errorInfo = error.message
    }
  }
}
