import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000'; // Ajusta según tu backend

  constructor(private http: HttpClient, private router: Router) {}

login(data: LoginRequest): Observable<LoginResponse> {
  const body = new URLSearchParams();
  body.set('username', data.email);  // 👈 el backend espera 'username'
  body.set('password', data.password);

  return this.http.post<LoginResponse>(
    `${this.baseUrl}/auth/login`,
    body.toString(),
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  ).pipe(
    tap((response) => {
      localStorage.setItem('token', response.access_token);
    })
  );
}


  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
