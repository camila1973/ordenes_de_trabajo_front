import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatListItem, MatNavList } from '@angular/material/list';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatTooltipModule,
    MatButtonModule,
    MatToolbarModule,
    MatAccordion,
    MatExpansionModule,
    MatNavList,
    MatListItem,
    MatExpansionPanel

  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
