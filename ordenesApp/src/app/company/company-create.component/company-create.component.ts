import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyUpdate } from '../../models/company-update.dto';
import { CityList } from '../../models/city-list.model';
import { CityService } from '../../services/city.service';


@Component({
  selector: 'app-company-create.component',
  standalone: false,
  templateUrl: './company-create.component.html',
  styleUrl: './company-create.component.scss'
})
export class CompanyCreateComponent {
companyForm: FormGroup;
cities: CityList[] = [];
  constructor(private fb: FormBuilder,
              private companyService: CompanyService,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<CompanyCreateComponent>,
              private cityService: CityService,
              @Inject(MAT_DIALOG_DATA) public data?: CompanyUpdate
            ) {
   this.companyForm = this.fb.group({
    name: [data?.name || '', [Validators.required, Validators.minLength(3)]],
    email:[data?.email || '', [Validators.required, Validators.email]],
    phone: [data?.phone ||'', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    address:[data?.address || '', [Validators.required, Validators.minLength(3)]],
    city_id: [1, Validators.required]
  });
  {
  this.cityService.getCities().subscribe({
    next: (data) => this.cities = data,
    error: (err) => console.error('Error al cargar ciudades', err)
  });
}
  }
  onSubmit() {
  if (this.companyForm.valid) {
    const company_create = this.companyForm.value;

    if (this.data) {
      // Modo editar
      this.companyService.updateCompany(this.data.id, company_create).subscribe({
        next: () => {
          this.snackBar.open('✅ Ciudad actualizada', 'Cerrar', { duration: 3000 });
          this.dialogRef.close(true);
        },
        error: () => {
          console.log(this.companyForm.value)
          this.snackBar.open('❌ Error al actualizar', 'Cerrar', { duration: 3000 });
        }
      });
    } else {
      // Modo crear
      this.companyService.createCompany(company_create).subscribe({
        next: () => {
          this.snackBar.open('✅ Empresa creada', 'Cerrar', { duration: 3000 });
          this.dialogRef.close(true);
        },
        error: () => {
          this.snackBar.open('❌ Error al crear empresa', 'Cerrar', { duration: 3000 });
        }
      });
    }
  }
}


}
