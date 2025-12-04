import { Component, Inject, Input, OnDestroy, OnInit, signal } from '@angular/core';
//import { ProductService } from '../../services/product.service';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { Product } from '../../../models/product';
import { Subscription } from 'rxjs';
import { ApiResponse } from '../../../models/api-response';
import { IProductService } from '../../services/product-service.contract';
import { FilterProductPipePipe } from '../../pipes/filter-product.pipe-pipe';

@Component({
  selector: 'app-product-list',
  imports: [FilterProductPipePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList implements OnInit, OnDestroy {
  //productRecords?: Product[];
  // isLoadingComplete = false
  // errorInfo = ''

  productRecords = signal<Product[] | undefined>(undefined);
  isLoadingComplete = signal<boolean>(false)
  errorInfo = signal<string>('')
  @Input('filterText') filterTextValue = ''
  private fetchSubscription?: Subscription;

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private readonly productSvc: IProductService) {

  }

  ngOnInit(): void {
    /*
    try {
      this.productRecords = this.productSvc.getProducts()
      this.isLoadingComplete = true
      this.errorInfo = ''
    } catch (error: any) {
      this.productRecords = undefined
      this.isLoadingComplete = true
      this.errorInfo = error.message
    }
    */

    this.fetchSubscription =
      this.productSvc.getProducts().subscribe({
        next: (apiResponse: ApiResponse<Product[]>) => {
          if (apiResponse.data !== null) {
            this.productRecords.set(apiResponse.data)
            this.isLoadingComplete.set(true)
            this.errorInfo.set('')
          } else {
            this.productRecords.set(undefined)
            this.isLoadingComplete.set(true)
            this.errorInfo.set(apiResponse.message)
          }
        },
        error: (err) => {
          this.productRecords.set(undefined)
          this.isLoadingComplete.set(true)
          this.errorInfo.set(err.message)
        }
      });
  }
  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
  }
}
