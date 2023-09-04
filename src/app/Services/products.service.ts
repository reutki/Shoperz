import { Injectable } from '@angular/core';
import { ApiService } from './api.service'; 
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public productsSubject = new BehaviorSubject<any[]>([]);
  products$: Observable<any[]> = this.productsSubject.asObservable();

  private filteredProductsSubject = new BehaviorSubject<any[]>([]);
  filteredProducts$: Observable<any[]> =
    this.filteredProductsSubject.asObservable();

  constructor(private api: ApiService) {}

  fetchProducts(category: string): void {
    const path = category
      ? `products/category/${category}?limit=0`
      : 'products';
    this.api.request('GET', path).subscribe((response: any) => {
      const products = response.products;

      this.productsSubject.next(products);
      this.filteredProductsSubject.next([...products]);
    });
  }

  updateFilteredProducts(filteredProducts: any[]) {
    this.filteredProductsSubject.next(filteredProducts);
  }
}
