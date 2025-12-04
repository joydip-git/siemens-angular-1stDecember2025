import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';

// function provideHttpClientProvider() {
//   const provider = {
//     provide: 'HTTP',
//     useClass: HttpClient
//   };
//   return provider;
// }
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
    //provideHttpClientProvider(),
    //PostService {provide: PostService, useClass:PostService}

  ]
};
