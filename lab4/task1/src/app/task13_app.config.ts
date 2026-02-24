import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './task13_app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
