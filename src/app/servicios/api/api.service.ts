import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExecOptionsWithBufferEncoding } from 'child_process';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productUrl = 'http://...' //ajustar URL con el Backend

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>('${this.productUrl}/${id');
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(this.productUrl, product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put('${this.productUrl}/${id}', product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete('${this.productUrl}/${id}');
  }

  getUser(): Observable<any[]> {
    // implementar GET
  }

  createUser(user: any): Observable<any> {
    // implementar POST
  }

  updateUser(id: number, user: any): Observable<any> {
    // implementar PUT
  }

  deleteUser(id: number): Observable<any> {
    // implementar DELETE
  }
  
}
