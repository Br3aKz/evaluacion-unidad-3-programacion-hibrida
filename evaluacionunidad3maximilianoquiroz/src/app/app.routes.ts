import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'message/:id',
    loadComponent: () =>
      import('./view-message/view-message.page').then((m) => m.ViewMessagePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'registro-valor-modal',
    loadComponent: () => import('./registro-valor-modal/registro-valor-modal.page').then( m => m.RegistroValorModalPage)
  },
  {
    path: 'confirmar-eliminacion-modal',
    loadComponent: () => import('./confirmar-eliminacion-modal/confirmar-eliminacion-modal.page').then( m => m.ConfirmarEliminacionModalPage)
  },
];

