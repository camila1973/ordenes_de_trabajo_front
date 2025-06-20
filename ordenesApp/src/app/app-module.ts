import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MaterialModule } from './material.module';
import { UserModule } from './user/user-module';
import { authInterceptorFn } from './interceptors/auth.interceptors';
import { CityModule } from './city/city-module';
import { MatSort } from '@angular/material/sort';
import { CompanyModule } from './company/company-module';

@NgModule({
  declarations: [
    App,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSort,
    MaterialModule,
    UserModule,
    CityModule,
    CompanyModule

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([authInterceptorFn])
    ),
  ],
  bootstrap: [App]
})
export class AppModule { }
