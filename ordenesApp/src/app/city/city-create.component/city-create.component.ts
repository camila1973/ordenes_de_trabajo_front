import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../../services/city.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateCityDto } from '../../models/city-create.dto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CityList } from '../../models/city-list.model';
@Component({
  selector: 'app-city-create.component',
  standalone: false,
  templateUrl: './city-create.component.html',
  styleUrl: './city-create.component.scss'
})
export class CityCreateComponent {

cityForm: FormGroup;

  constructor(private fb: FormBuilder,
              private cityService: CityService,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<CityCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data?: CityList
            ) {
   this.cityForm = this.fb.group({
    name: [data?.name || '', [Validators.required, Validators.minLength(3)]]
  });
  }
  onSubmit() {
  if (this.cityForm.valid) {
    const city = this.cityForm.value;

    if (this.data) {
      // Modo editar
      this.cityService.updateCity(this.data.id, city).subscribe({
        next: () => {
          this.snackBar.open('✅ Ciudad actualizada', 'Cerrar', { duration: 3000 });
          this.dialogRef.close(true);
        },
        error: () => {
          console.log(this.cityForm.value)
          this.snackBar.open('❌ Error al actualizar', 'Cerrar', { duration: 3000 });
        }
      });
    } else {
      // Modo crear
      this.cityService.createCity(city).subscribe({
        next: () => {
          this.snackBar.open('✅ Ciudad creada', 'Cerrar', { duration: 3000 });
          this.dialogRef.close(true);
        },
        error: () => {
          this.snackBar.open('❌ Error al crear ciudad', 'Cerrar', { duration: 3000 });
        }
      });
    }
  }
}

}
