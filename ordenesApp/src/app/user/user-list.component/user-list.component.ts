import { Component } from '@angular/core';
import { UserListDto } from '../../models/user-list.dto';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list.component',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
 dataSource = new MatTableDataSource<UserListDto>();
  displayedColumns: string[] = ['name', 'last_name', 'email', 'phone', 'username', 'role'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => this.dataSource.data = data,
      error: (err) => console.error(err)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
