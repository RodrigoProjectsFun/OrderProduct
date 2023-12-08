import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:5038/api/pruebatecnicadb';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getorders`);
  }
  getOrderById(orderId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getorder/${orderId}`);
    
  }  addOrder(orderData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addorders`, orderData);
  }

  editOrder(orderId: string, orderData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/editorder/${orderId}`, orderData);
  }

  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteorder/${orderId}`);
  }
}
