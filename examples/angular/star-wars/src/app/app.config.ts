import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { QueryClient, provideAngularQuery } from "@tanstack/angular-query-experimental";
import { appRoutes } from "./app.routes";
import type { ApplicationConfig } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAngularQuery(
      new QueryClient({
        defaultOptions: {
          queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
          },
        },
      }),
    ),
  ],
};