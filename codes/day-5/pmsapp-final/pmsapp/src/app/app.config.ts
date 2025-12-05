import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
// import { ProductService } from './products/services/product.service';
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from './config/constants';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor.service';
// import { UserService } from './auth/services/user.service';
// import { TokenStorageService } from './services/token-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    //ProductService
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: PRODUCT_SERVICE_TYPE
    },
    // UserService <- already metioned {providedIn:'root'} in @Injectable()
    // TokenStorageService <- already metioned {providedIn:'root'} in @Injectable()
  ]
};
