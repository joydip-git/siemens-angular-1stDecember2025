import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Joydip'
  data = 100
  width = 400
  person = {
    id: 1,
    name: 'joy'
  }

  // onInput(e: Event) {
  //   const element: HTMLInputElement = e.target as HTMLInputElement;
  //   console.log('event fired...' + element?.value);
  // }

  onInput(str: string) {
    //console.log('event fired...' + str);
    this.name = str
  }
}
