import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./module/login/login-routing-module').then(m => m.LoginRoutingModule) },
  //{ path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }

];
