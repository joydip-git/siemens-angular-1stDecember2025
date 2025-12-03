"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("./storage");
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
var subscription = storage_1.storage
    .storeObservable
    .subscribe({
    next: function (num) {
        console.log('got data ' + num);
    },
    error: function (err) {
        console.log(err);
    },
    complete: function () {
        console.log('do something else after next..will NOT be executed if observable returns error');
    }
});
//publisher
var value = 1;
setInterval(function () {
    console.log("publishing ".concat(value));
    storage_1.storage.publish(value);
    value++;
}, 1000);
//unsubscribe
setTimeout(function () {
    subscription.unsubscribe();
}, 10000);
