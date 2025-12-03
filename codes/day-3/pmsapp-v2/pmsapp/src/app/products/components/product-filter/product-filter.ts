import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.css',
})
export class ProductFilter {
  filterValue = ''
  @Output('filterTextChanged') filterTextValueChanged = new EventEmitter<string>()
  updateFilterValue(newText: string) {
    this.filterValue = newText
    this.filterTextValueChanged.emit(this.filterValue)
  }
}
