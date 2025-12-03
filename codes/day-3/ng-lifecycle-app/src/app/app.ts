import { Component, OnDestroy } from '@angular/core';
import { Person } from './models/person';
import { Child } from './child/child';

export const personRecords: Person[] = [
  {
    id: 1,
    name: 'anil kumar',
    salary: 10000
  },
  {
    id: 2,
    name: 'sunil',
    salary: 20000
  }
]

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy{
  show = false
  updateShow() {
    this.show = !this.show
  }
  personInfo: Person = {
    id: 1,
    name: 'anil',
    salary: 1000
  }

  people = personRecords

  //selectedPerson: Person | undefined = undefined
  //selectedPerson?: Person;
  selectedPersonId = 0

  constructor() {
    console.log('app created');
  }
  ngOnDestroy(): void {
    console.log('app done...');
  }

  setSelectedPerson(p: number) {
    //this.selectedPerson = p
    this.selectedPersonId = p
  }
  updatePerson() {
    //will NOT trigger changes event in child, as no new person object is being passed via the "person" property of the child, only a single property value in the existing object has been updated

    //this.personInfo.salary *= 2;

    const copy: Person = {
      ...this.personInfo,
      salary: this.personInfo.salary * 2
    }
    //will trigger changes event in child, as a new person object has been assigned to "personInfo" in this component which will be again passed via the "person" property of the child
    this.personInfo = copy
  }
}
