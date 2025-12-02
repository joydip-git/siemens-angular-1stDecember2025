import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { appConfig } from "./app/app.config";

// platformBrowser()
//   .bootstrapModule(AppModule)

bootstrapApplication(App, appConfig)
  .catch(e => console.log(e))
