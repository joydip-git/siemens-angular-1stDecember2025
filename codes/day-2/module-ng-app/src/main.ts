import { platformBrowser } from "@angular/platform-browser";
import { PlatformRef } from "@angular/core";
import { AppModule } from "./app/app-module";

const platform: PlatformRef = platformBrowser();

platform
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));

