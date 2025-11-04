import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, UrlSerializer} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {PrettyUrlSerializer} from './pretty-url-serializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes), provideClientHydration(),
    // {provide: UrlSerializer, useClass: PrettyUrlSerializer}
  ]
};
