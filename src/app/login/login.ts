import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth-service';
import { Router } from '@angular/router';

export type AuthRequest = {
      login: string,
      password: string
}

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
   hidePassword = true;
   selectedLanguage = 'fr';
   fb = inject(FormBuilder)
   translate = inject(TranslateService)
   authService = inject(AuthService)
   router = inject(Router)
   errorMessage!: string

  LANGUAGES = [
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' },
];

  constructor() {
    this.translate.addLangs(['fr', 'ar'])
    this.translate.use('fr')
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required]], //, Validators.email
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  useLanguage(language: string): void {

    this.translate.use(language);
}
  onSubmit() {
    const loginData: AuthRequest = {login: '', password: ''}
    if (this.loginForm.valid) {
      loginData.login = this.loginForm.get('email')?.value!!
      loginData.password = this.loginForm.get('password')?.value!!


      this.router.navigate(['dashboard'])
      /*
      this.authService.login(loginData).subscribe( data => {
        console.log(data)
        this.router.navigate(['dashboard'])
      }, error => console.log(error) )
    } else {
      this.loginForm.markAllAsTouched();
    }    */
  }

}

}