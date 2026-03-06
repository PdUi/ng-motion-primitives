/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'components',
    children: [
      {
        path: 'accordion',
        loadComponent: async () =>
          import('./demo-accordion/demo-accordion').then((m) => m.DemoAccordionComponent),
      },
      {
        path: 'animate-background',
        loadComponent: async () =>
          import('./demo-animate-background/demo-animate-background').then(
            (m) => m.DemoAnimateBackground,
          ),
      },
      {
        path: '',
        redirectTo: 'accordion',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'components',
    pathMatch: 'full',
  },
];
