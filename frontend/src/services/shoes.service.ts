import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Shoes } from 'src/models/shoes';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Shoes[]> {
    return this.http.get<Shoes[]>(`${this.apiUrl}/products`)
  }

  getProductById(id: number): Observable<Shoes> {
    return this.http.get<Shoes>(`${this.apiUrl}/products/${id}`)
  }
}
