import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCT_API_URL } from '../../config/constants';
import { ApiResponse } from '../../models/api-response';
import { Product } from '../../models/product';
//import { products } from '../../repository/products';

//without any custom provider registration, the ProductService will be registered at the root level with default registration technique (token name same as that of the class name)
// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class ProductService {
  constructor(private readonly _http: HttpClient) {

  }
  getProducts() {
    // return [...products]
    return this._http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
  }
}
