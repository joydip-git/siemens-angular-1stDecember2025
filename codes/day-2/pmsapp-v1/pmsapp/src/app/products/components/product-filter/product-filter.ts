import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  filterValue = ''
  @Output() filterTextChanged = new EventEmitter<string>()
  updateFilterValue(newText: string) {
    this.filterValue = newText
    this.filterTextChanged.emit(this.filterValue)
  }
}
