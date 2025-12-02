import { Component } from '@angular/core';
import { Another } from "./another/another";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Another]
})
export class App {

}
