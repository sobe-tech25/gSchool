import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/storage-service';
import { catchError, tap, throwError } from 'rxjs';
import { AuthRequest } from './login';


type TokenResponse = {
  token: string
}
 export type RegisterRequest = {
  firstname: string,
  lastname: string,
  email:string,
  password: string,
  role: "USER" | "ADMIN" | "MANAGER"
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = 'http://localhost:8080/api/auth';
  private http = inject(HttpClient);
  private storageService = inject(StorageService);
  private router = inject(Router);

  login(authReq: AuthRequest){
    //console.log(authReq.login +' '+authReq.password + ' Service level')
    return this.http
    .post<TokenResponse>(`${this.apiUrl}/login`, authReq)
        .pipe(
          tap( response => {
            this.storageService.setToken(response.token);
            this.router.navigate(['/']);
          }),
          catchError((error) => {
            console.log(error)
            return throwError( () => new Error('Incorrect login, please try again.'))
          })
        )
  }
  register(regsiter : RegisterRequest){
    return this.http
      .post<TokenResponse>(`${this.apiUrl}/register`, regsiter)
      .pipe(
        tap( (response) => {
          this.storageService.setToken(response.token);
            this.router.navigate(['/']);
        }),
        catchError((error) => {
            console.log(error)
            return throwError( () => new Error('Incorrect login, please try again.'))
          })
      )
  }

  logout(){
    this.storageService.clearToken();
    this.router.navigate(['/login']);
  }

  //Helper method to determine if token exist or not
  isLoggeIn(){
    return Boolean(this.storageService.getToken())
  }
}
