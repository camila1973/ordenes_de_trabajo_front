import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CreateUserDto } from '../../models/user-create.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-create.component',
  standalone: false,
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss',
})
export class UserCreateComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
          ),
        ],
      ],
      role_id: [1, Validators.required],
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const user: CreateUserDto = this.userForm.value;
      console.log('JSON enviado:', JSON.stringify(user, null, 2));
      this.userService.createUser(user).subscribe({
    next: (user) => {
      this.snackBar.open('✅ Usuario creado exitosamente', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-success']
      });
      this.userForm.reset();
    },
    error: (error) => {
      console.error('Error al crear usuario', error);
      this.snackBar.open('❌ Error al crear el usuario', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
    }
  });
}}}
