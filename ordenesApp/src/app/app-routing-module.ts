import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogin } from './user/user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component/dashboard.component';
import { AuthGuard } from './guards/auth-guard';
import { SidenavComponent } from './shared/sidenav/sidenav';


const routes: Routes = [
  { path: 'login', component: UserLogin },
 {
    path: '',
    component: SidenavComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'usuarios', component: UsuariosComponent },
      // { path: 'ordenes', component: OrdenesComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
