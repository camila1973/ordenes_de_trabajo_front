import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CompanyListComponent } from './company-list.component/company-list.component';



@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[CompanyListComponent]
})
export class CompanyModule { }
