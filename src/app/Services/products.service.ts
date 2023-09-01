import { Injectable } from '@angular/core';
import { ApiService } from './api.service'; // Import your API service
import { Observable, BehaviorSubject, map } from 'rxjs';

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
    this.api
      .request('GET', `products/category/${category}?limit=0`)
      .subscribe((response: any) => {
        const products = response.products;

        this.productsSubject.next(products);
        this.filteredProductsSubject.next([...products]);
        console.log(products);
      });
  }

  updateFilteredProducts(filteredProducts: any[]) {
    this.filteredProductsSubject.next(filteredProducts);
  }
}
