import { Component, ViewChild } from '@angular/core';
import { Company } from '../../models/company.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from '../../services/company.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompanyCreateComponent } from '../company-create.component/company-create.component';

@Component({
  selector: 'app-company-list.component',
  standalone: false,
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

dataSource = new MatTableDataSource<Company>();
 @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  displayedColumns: string[] = ['name','email','phone', 'address', 'city', 'actions'];

  constructor(private companyService: CompanyService, private dialog: MatDialog, private snackBar: MatSnackBar) {}

ngOnInit(): void {
  this.loadCompanies();
}

loadCompanies(): void {
  this.companyService.getCompanies().subscribe({
    next: (data) => this.dataSource.data = data,
    error: (err) => console.error(err)
  });
}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    openCreateDialog(): void {
    const dialogRef = this.dialog.open(CompanyCreateComponent, {
      width: '350px',
      height: 'auto',
      maxHeight: '90vh'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // refresca la lista
        this.loadCompanies();
      }
    });

  }

  openEditDialog(company: Company): void {
    const dialogRef = this.dialog.open(CompanyCreateComponent, {
      width: '350px',
      data: company
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCompanies();
      }
    });}

}
