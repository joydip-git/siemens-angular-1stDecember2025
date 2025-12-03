import { Injectable } from '@angular/core';
import { products } from '../../repository/products';

//without any custom provider registration, the ProductService will be registered at the root level with default registration technique (token name same as that of the class name)
// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class ProductService {
  getProducts() {
    return [...products]
  }
}
