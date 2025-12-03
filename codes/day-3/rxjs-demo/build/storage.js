"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
var rxjs_1 = require("rxjs");
var Storage = /** @class */ (function () {
    function Storage() {
        this.store = new rxjs_1.BehaviorSubject(0);
        this.storeObservable = this.store.asObservable();
    }
    Storage.prototype.publish = function (data) {
        this.store.next(data);
    };
    return Storage;
}());
var storage = new Storage();
exports.storage = storage;
