import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../../models/product'; 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5038/api/pruebatecnicadb';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(`${this.apiUrl}/getproducts`);
  }

  getProductById(id: string): Observable<product> {
    return this.http.get<product>(`${this.apiUrl}/getproduct/${id}`);
  }

  addProduct(product: product): Observable<any> {
    return this.http.post(`${this.apiUrl}/addproduct`, product);
  }

  updateProduct(id: string, product: product): Observable<any> {
    return this.http.put(`${this.apiUrl}/editproduct/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteproduct/${id}`);
  }

  // ... any other necessary methods ...
}
