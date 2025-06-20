import { CityList } from './../models/city-list.model';
import { environment } from './../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateCityDto } from '../models/city-create.dto';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private baseUrl=environment.apiUrl;
  private http = inject(HttpClient);
  constructor() { }

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

    getCities(): Observable<CityList[]> {
    return this.http.get<CityList[]>(`${this.baseUrl}/cities`, this.httpOptions);
  }

  createCity(data: CreateCityDto): Observable<CityList> {
    return this.http.post<CityList>(`${this.baseUrl}/cities`, data, this.httpOptions);
  }

  updateCity(id: number, data: CreateCityDto) {
  return this.http.put(`${this.baseUrl}/cities/${id}`, data, this.httpOptions);
}

deleteCity(id: number) {
  return this.http.delete(`${this.baseUrl}/cities/${id}`, this.httpOptions);
}
}
