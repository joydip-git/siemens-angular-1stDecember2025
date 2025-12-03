import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Person } from '../models/person';
import { personRecords } from "../app";

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnInit, OnChanges, OnDestroy {
  @Input() person: Person = { id: 0, name: '', salary: 0 }
  @Input() selectedId = 0
  selectedPerson?: Person;

  constructor() {
    console.log('child created');
    console.log(this.person);
    console.log(this.selectedId);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child changed');
    console.log(this.person);
    console.log(this.selectedId);
    this.selectedPerson = personRecords.find(p => p.id === this.selectedId)
  }

  ngOnInit(): void {
    console.log('child init');
    console.log(this.person);
    console.log(this.selectedId);
  }

  ngOnDestroy(): void {
    console.log('child done');
    console.log(this.person);
    console.log(this.selectedId);
  }
}
