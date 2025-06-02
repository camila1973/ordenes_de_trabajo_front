import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLogin } from './user-login/user-login.component';
import { MaterialModule } from '../material.module';




@NgModule({
  declarations: [UserLogin],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[  UserLogin,

  ]
})
export class UserModule { }
