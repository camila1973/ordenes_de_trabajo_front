import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Sidenav } from './shared/sidenav/sidenav';
import { Footer } from './shared/footer/footer';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    Sidenav,
    Footer
  ]
})
export class MaterialModule { }
