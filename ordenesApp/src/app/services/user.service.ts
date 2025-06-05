import { environment } from './../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateUserDto } from '../models/user-create.dto';
import { catchError, map, Observable, pipe, retry } from 'rxjs';
import { User } from '../models/user.model';
import { UserListDto } from '../models/user-list.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl=environment.apiUrl;
  private http = inject(HttpClient);

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  constructor() { }
  createUser(data: CreateUserDto): Observable<User> {
  return this.http.post<User>(`${this.baseUrl}/auth/register`, data, this.httpOptions);
  }

  getUsers(): Observable<UserListDto[]> {
  return this.http.get<UserListDto[]>(`${this.baseUrl}/auth/users`, this.httpOptions);
}

}

