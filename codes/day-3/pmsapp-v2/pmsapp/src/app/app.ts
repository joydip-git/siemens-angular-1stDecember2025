import { Component } from '@angular/core';
import { ProductList } from "./products/components/product-list/product-list";
import { ProductFilter } from "./products/components/product-filter/product-filter";

@Component({
  selector: 'app-root',
  imports: [ProductList, ProductFilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  textToFilter = ''
  
  receiveUpdatedTextToFilter(newFilterText: string) {
    this.textToFilter = newFilterText    
  }
}
