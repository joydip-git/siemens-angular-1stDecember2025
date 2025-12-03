import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ApplicationRef } from '@angular/core';

//Bootstraps an instance of an Angular application and renders a standalone component as the application's root component asynchronously.

//ApplicationRef: A reference to an Angular application running on a page.

const appRefPromise: Promise<ApplicationRef> = bootstrapApplication(App, appConfig)

appRefPromise
  .then(
    (appRef: ApplicationRef) => {
      console.log(appRef.components);
      console.log(appRef.injector);
      console.log(appRef.viewCount);
    }
  )
  .catch((err) => console.error(err));
