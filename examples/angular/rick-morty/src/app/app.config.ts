import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideRouter } from '@angular/router'
import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental'

import { routes } from './app.routes'
import type { ApplicationConfig } from '@angular/core'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAngularQuery(new QueryClient()),
  ],
}
