import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLogin } from './user-login/user-login.component';
import { MaterialModule } from '../material.module';
import { UserCreateComponent } from './user-create.component/user-create.component';
import { UserListComponent } from './user-list.component/user-list.component';




@NgModule({
  declarations: [UserLogin, UserCreateComponent,UserListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[  UserLogin, UserCreateComponent, UserListComponent

  ]
})
export class UserModule { }
