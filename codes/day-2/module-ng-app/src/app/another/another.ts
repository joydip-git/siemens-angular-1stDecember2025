import { Component } from "@angular/core";

@Component({
    selector: 'app-another',
    template: `<p>This is another component</p>`,
    standalone: false
})
export class Another {
    constructor() {
        console.log('another created...');
    }
}