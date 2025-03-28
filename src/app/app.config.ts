import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

const MyPreset = definePreset(Aura, {
  components: {
    // custom button tokens and additional style
    //https://github.com/primefaces/primeng/blob/master/packages/themes/src/presets/aura/button/index.ts
    button: {
      extend: {
        colorScheme: {
          //light: {
          // root: {
          primary: {
            background: '{blue.500}',
          },
          //},
          //},
        },
        extend: {
          root: {
            borderRadius: '10px',
          },
        },
      },
    },
  },
  // common tokens and styles
});

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
    provideRouter(routes),
  ],
};
