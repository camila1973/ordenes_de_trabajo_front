import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CompanyListComponent } from './company-list.component/company-list.component';
import { CompanyCreateComponent } from './company-create.component/company-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CompanyListComponent, CompanyCreateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[CompanyListComponent, CompanyCreateComponent]
})
export class CompanyModule { }
