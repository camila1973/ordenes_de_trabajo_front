import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './city-list.component/city-list.component';
import { MaterialModule } from '../material.module';
import { CityCreateComponent } from './city-create.component/city-create.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [CityListComponent, CityCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports:[ CityListComponent, CityCreateComponent]
})
export class CityModule { }
