import { UserCreateComponent } from './user/user-create.component/user-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogin } from './user/user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component/dashboard.component';
import { AuthGuard } from './guards/auth-guard';
import { SidenavComponent } from './shared/sidenav/sidenav';
import { UserListComponent } from './user/user-list.component/user-list.component';



const routes: Routes = [
  { path: 'login', component: UserLogin },
 {
    path: '',
    component: SidenavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'create', component: UserCreateComponent },
      { path: 'user/list', component: UserListComponent},
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
