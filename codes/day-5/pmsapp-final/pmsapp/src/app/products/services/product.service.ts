import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCT_API_URL } from '../../config/constants';
import { ApiResponse } from '../../models/api-response';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { IProductService } from './product-service.contract';
//import { products } from '../../repository/products';

//without any custom provider registration, the ProductService will be registered at the root level with default registration technique (token name same as that of the class name)
// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class ProductService implements IProductService {
  constructor(private readonly _http: HttpClient) {

  }
  updateProduct(id: number, p: Product): Observable<ApiResponse<Product[]>> {
    throw new Error('Method not implemented.');
  }
  deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
    throw new Error('Method not implemented.');
  }
  addProduct(p: Product): Observable<ApiResponse<Product[]>> {
    throw new Error('Method not implemented.');
  }

  getProduct(id: number): Observable<ApiResponse<Product>> {
    return this._http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
  }

  getProducts(): Observable<ApiResponse<Product[]>> {
    // return [...products]
    return this._http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
  }
}
