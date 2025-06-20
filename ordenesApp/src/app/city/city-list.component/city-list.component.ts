import { CityService } from './../../services/city.service';
import { Component, ViewChild } from '@angular/core';
import { CityList } from '../../models/city-list.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CityCreateComponent } from '../city-create.component/city-create.component';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-city-list.component',
  standalone: false,
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.scss'
})
export class CityListComponent {
dataSource = new MatTableDataSource<CityList>();
 @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  displayedColumns: string[] = ['id','name', 'actions'];

  constructor(private cityService: CityService, private dialog: MatDialog, private snackBar: MatSnackBar) {}

ngOnInit(): void {
  this.loadCities();
}

loadCities(): void {
  this.cityService.getCities().subscribe({
    next: (data) => this.dataSource.data = data,
    error: (err) => console.error(err)
  });
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openCreateDialog(): void {
  const dialogRef = this.dialog.open(CityCreateComponent, {
    width: '350px',
    height: 'auto',
    maxHeight: '90vh'
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      // refresca la lista
      this.loadCities();
    }
  });

}

openEditDialog(city: CityList): void {
  const dialogRef = this.dialog.open(CityCreateComponent, {
    width: '350px',
    data: city
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.loadCities();
    }
  });}


  deleteCity(id: number): void {
  if (confirm('¿Estás seguro de que deseas eliminar esta ciudad?')) {
    this.cityService.deleteCity(id).subscribe({
      next: () => {
        this.snackBar.open('✅ Ciudad eliminada exitosamente', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-success']
        });
        this.loadCities();
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('❌ Error al eliminar ciudad', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
      }
    });
  }
}

}
