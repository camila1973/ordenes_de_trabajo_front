import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.html',
  styleUrl: './user-login.scss'
})
export class UserLogin {

   loginForm: FormGroup;
   hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  onSubmit(): void {
  if (this.loginForm.valid) {
    const datos = this.loginForm.value;
    console.log('Enviando al backend:', datos);

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);
        this.router.navigate(['/dashboard']); // Cambia la ruta según tu app
      },
      error: (error) => {
        // mostrar error al usuario
        console.log('Respuesta del backend:', error);
        console.error('Credenciales incorrectas');
      }
    });
  }
}
}
