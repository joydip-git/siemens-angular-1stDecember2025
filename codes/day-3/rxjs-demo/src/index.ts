import { Subscription, map, filter } from "rxjs";
import { storage } from "./storage";

//obs: Observable<number> = of(10)




//consumer
// const numObserver: Observer<number> = {
//     next: (num) => {
//         console.log('got data ' + num);
//     },
//     error: (err) => {
//         console.log(err);
//     },
//     complete: () => {
//         console.log('do something else after next..will NOT be executed if observable returns error');
//     }
// }

//obs.subscribe(numObserver)
const subscription: Subscription =
    storage
        .storeObservable
        .pipe(
            filter(
                (num) => num % 2 != 0
            ),
            map(
                (num) => num * 2
            )
        )
        .subscribe({
            next: (num) => {
                console.log('got data ' + num);
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                console.log('do something else after next..will NOT be executed if observable returns error');
            }
        })

//publisher
let value = 1
setInterval(
    () => {
        console.log(`publishing ${value}`);
        storage.publish(value)
        value++
    }, 1000
)

//unsubscribe
setTimeout(
    () => {
        subscription.unsubscribe()
    }, 10000
)