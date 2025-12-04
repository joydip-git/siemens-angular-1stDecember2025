//import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
  //imports:[NgFor,NgIf]
})
export class App {
  name = 'Joydip'
  nameData: WritableSignal<string> = signal('Anil')
  fullName = computed(() => this.nameData + " Gupta")
  data = 100
  width = 400
  person = {
    id: 1,
    name: 'joy'
  }

  constructor(private readonly detector: ChangeDetectorRef) {
    this.detector.markForCheck()
  }
  detatchDetector() {
    this.detector.detach()
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
  attachDetector() {
    this.detector.detectChanges()
  }
  onNameDataChanged(newName: string) {
    this.nameData.set(newName)
    console.log(this.fullName().valueOf());
  }
}
