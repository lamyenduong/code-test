import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from 'src/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  addToCart(id: number, quantity: number): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/cart/${id}`, { quantity })
  }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/cart`);
  }

  updateCart(id: number, quantity: number): Observable<Cart> {
    return this.http.patch<Cart>(`${this.apiUrl}/cart/${id}`, { quantity });
  }

  deleteCart(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/cart/${id}`);
  }
}