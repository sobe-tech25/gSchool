import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  const router = inject(Router);

  return true;
  /*
  if (authServ.isLoggeIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }  */
};
