import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-second',
    template: `<p>Second</p>`
})
export class Second implements OnInit, OnChanges, OnDestroy {
    constructor() {
        console.log('second created...');
    }
    ngOnDestroy(): void {
        console.log('destroy');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes');
    }
    ngOnInit(): void {
        console.log('init');
    }
}