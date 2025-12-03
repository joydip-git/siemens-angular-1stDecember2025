import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DataService } from './services/data.service';
import { StorageService } from './services/storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    //custom registration technique (where the token name is decide by you. It can't be interface name)
    {
      provide: 'SVC_TOKEN',
      useClass: DataService
    },
    StorageService  
    
    //default registration technique (where the token name is the class name itself)
    //DataService,

    //equivalent to the following
    //   {
    //     provide: DataService,
    //     useClass: DataService
    //   }
  ]
};
