import { Component, Inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { IProductService } from '../../services/product-service.contract';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../../../models/api-response';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {

  private prodSubscription?: Subscription;
  product = signal<Product | undefined>(undefined)
  isFetchComplete = signal(false)
  errorInfo = signal('')

  constructor(
    private currentRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private prodSvc: IProductService
  ) {
  }

  ngOnInit(): void {
    //this.currentRoute.params;
    const routeSnapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot;

    const currentRouteParams: Params = routeSnapshot.params;
    const productId = Number(currentRouteParams['id'])

    this.prodSubscription =
      this
        .prodSvc
        .getProduct(productId)
        .subscribe({
          next: (response: ApiResponse<Product>) => {
            if (response.data !== null) {
              this.product.set(response.data)
              this.isFetchComplete.set(true)
              this.errorInfo.set('')
            } else {
              this.product.set(undefined)
              this.isFetchComplete.set(true)
              this.errorInfo.set(response.message)
            }
          },
          error: (err) => { 
            this.product.set(undefined)
            this.isFetchComplete.set(true)
            this.errorInfo.set(err.message)
          }
        })
  }
}
