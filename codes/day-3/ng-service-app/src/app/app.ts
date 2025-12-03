import { Component, inject, Inject } from '@angular/core';
import { DataService } from './services/data.service';
import { IDataService } from './services/IDataService';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // providers: [
  //   {
  //     provide: 'SVC_TOKEN',
  //     useClass: DataService
  //   }
  // ]
  // providers: [
  //   {
  //     provide: DataService,
  //     useClass: DataService
  //   }
  // ]
  //providers: [DataService]
})
export class App {
  
  names: string[] = []

  //private readonly dataSvc: DataService;
  // constructor(dataSvc: DataService) {
  //   // this.dataSvc = new DataService()
  //   this.dataSvc = dataSvc
  // }
  
  // private readonly dataSvc: IDataService;
  // constructor(@Inject('SVC_TOKEN') dataSvc: IDataService) {
  //   this.dataSvc = dataSvc
  // }

  //private readonly dataSvc: IDataService;
  constructor(@Inject('SVC_TOKEN') private readonly dataSvc: IDataService) {
    //this.dataSvc = dataSvc
  }
  
  // constructor() {
  //   this.dataSvc = inject(DataService)
  // }
  loadData() {

    this.names = this.dataSvc.getNames()
  }
}
