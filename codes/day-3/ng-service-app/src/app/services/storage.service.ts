import { Injectable } from "@angular/core"

@Injectable()
export class StorageService {
    private readonly data: string[] = ["anil", "sunil", "joydip"]
    getAll() {
        return [...this.data]
    }
}