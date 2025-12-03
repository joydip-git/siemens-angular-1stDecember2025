import { BehaviorSubject } from "rxjs"

class Storage {
    private store = new BehaviorSubject<number>(0)
    storeObservable = this.store.asObservable()

    publish(data: number) {
        this.store.next(data)
    }
}
const storage = new Storage()
export { storage }