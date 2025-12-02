import { NgModule } from "@angular/core";
import { App } from "./app";
import { Another } from "./another/another";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [App, Another],
  providers: [],
  imports: [BrowserModule],
  exports: [],
  bootstrap: [App]
})
export class AppModule {
  constructor() {
    console.log('app module created...');
  }
}