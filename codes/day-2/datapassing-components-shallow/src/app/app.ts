import { Component } from '@angular/core';
import { Child } from "./components/child/child";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Child]
})
export class App {
  parentData = 100

  reciveUpdatedData(newData: number) {
    this.parentData = newData
  }
}
