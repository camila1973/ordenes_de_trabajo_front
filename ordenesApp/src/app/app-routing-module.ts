import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogin } from './user/user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component/dashboard.component';
import { AuthGuard } from './guards/auth-guard';


const routes: Routes = [
  { path: 'login', component: UserLogin },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
