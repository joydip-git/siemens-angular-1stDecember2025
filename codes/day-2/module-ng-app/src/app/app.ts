import { Component } from "@angular/core";

@Component({
  selector: 'app-x',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: false
})
export class App {
  constructor() {
    console.log('app component created...');
  }
}