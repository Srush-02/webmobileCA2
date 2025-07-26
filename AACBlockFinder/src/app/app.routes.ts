import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'location',
    loadComponent: () => import('./location/location.page').then((m) => m.LocationPage),
  },
  {
    path: 'products',
    loadComponent: () => import('./products/acc.page').then((m) => m.AccPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
