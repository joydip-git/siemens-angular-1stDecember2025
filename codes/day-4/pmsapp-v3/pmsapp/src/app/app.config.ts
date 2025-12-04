import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { ProductService } from './products/services/product.service';
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from './config/constants';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    //ProductService
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: PRODUCT_SERVICE_TYPE
    }
  ]
};
