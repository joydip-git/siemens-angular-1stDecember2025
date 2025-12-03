import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { IDataService } from "./IDataService";

@Injectable()
export class DataService implements IDataService {
    // private readonly data: string[] = ["anil", "sunil", "joydip"]

    // private readonly svc: StorageService;
    // constructor(svc: StorageService) {
    //     this.svc = svc
    //}
    constructor(private readonly svc: StorageService) {

    }

    getNames() {
        //return [...this.data];
        return this.svc.getAll()
    }
}