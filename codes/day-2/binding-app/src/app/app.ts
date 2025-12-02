//import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  //imports:[NgFor,NgIf]
})
export class App {
  name = 'Joydip'
  data = 100
  width = 400
  person = {
    id: 1,
    name: 'joy'
  }

  numbers = [1, 2, 3, 4, 5]
  choice = 0
  onChoiceEntered(val: number) {
    this.choice = val
  }
  // constructor() {

  //   for (let x of this.numbers) {
  //     console.log(x);
  //   }
  //   for (let i in this.numbers) {
  //     console.log(this.numbers[i]);
  //   }
  // }

  // onInput(e: Event) {
  //   const element: HTMLInputElement = e.target as HTMLInputElement;
  //   console.log('event fired...' + element?.value);
  // }

  onInput(str: string) {
    //console.log('event fired...' + str);
    this.name = str
  }
}
