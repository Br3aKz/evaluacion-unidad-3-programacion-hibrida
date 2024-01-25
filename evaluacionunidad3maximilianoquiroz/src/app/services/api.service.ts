import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://destinos.maxicorp.com/api/destinos';

  constructor(private http: HttpClient) {}

  obtenerDestinos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}