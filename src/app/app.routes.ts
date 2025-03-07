import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.component'),
    children: [
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full',
      },
      {
        path: 'customers',
        loadComponent: () => import('./pages/customers/customers.component'),
      },
      {
        path: 'monthly-expenses',
        loadComponent: () =>
          import('./pages/monthly-expenses/monthly-expenses.component'),
      },
      {
        path: 'inventory',
        loadComponent: () => import('./pages/inventory/inventory.component'),
      },
    ],
  },
];
