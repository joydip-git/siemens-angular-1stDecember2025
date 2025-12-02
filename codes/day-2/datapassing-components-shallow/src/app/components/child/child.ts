import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() data = 0;
  @Output() dataChanged = new EventEmitter<number>();
  //input = new EventEmitter<Event>();

  updateData(val: number) {
    this.data = val
    this.dataChanged.emit(this.data)
  }
}
