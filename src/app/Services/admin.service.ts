import { ProductsService } from 'src/app/Services/products.service';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
constructor(private api: ApiService, private productsService:ProductsService) {}


addProduct(productData: any): Observable<any> {
  this.productsService.productsSubject.next([...this.productsService.productsSubject.value,productData])
  console.log( this.productsService.productsSubject.value);
  return this.api.request('POST', 'products/add', productData);
}
addAdmin(username: string): void {
  let admins: string[] = JSON.parse(localStorage.getItem('admins') || '[]');
  admins.push(username);
  localStorage.setItem('admins', JSON.stringify(admins));
}

  getAdmins(): string[] {

    return JSON.parse(localStorage.getItem('admins') || '[]');
  }
}
