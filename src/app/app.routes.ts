import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './login/auth-guard';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login' , component: Login
  },
  {
    path:'dashboard', component: Dashboard, canActivate: [authGuard]
  },
  {
    path: '**', component: Login
  }

];
