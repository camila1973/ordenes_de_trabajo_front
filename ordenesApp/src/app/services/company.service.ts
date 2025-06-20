import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CompanyCreate } from '../models/company-create.dto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
    private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };


  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies`, this.httpOptions);
  }

  createCompany(data: CompanyCreate): Observable<Company> {
      return this.http.post<Company>(`${this.baseUrl}/companies`, data, this.httpOptions);
    }

  updateCompany(id: number, data: CompanyCreate) {
    return this.http.put(`${this.baseUrl}/companies/${id}`, data, this.httpOptions);
  }

  deleteCompany(id: number) {
    return this.http.delete(`${this.baseUrl}/companies/${id}`, this.httpOptions);
  }
}
