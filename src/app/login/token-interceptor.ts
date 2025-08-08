import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { StorageService } from '../shared/storage-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const storageSrv = inject(StorageService);
  const router = inject(Router);

  const token = storageSrv.getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    })
  }
  return next(req)
  .pipe(
    catchError( error => {
      if (error.status === 403) {
        storageSrv.clearToken();
        router.navigate(['/login']);
      }

      return throwError(() => error)
    })
  );
};
