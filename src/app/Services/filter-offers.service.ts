import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterOffersService {
  private productsSubject = new BehaviorSubject<any[]>([]);
  products$: Observable<any[]> = this.productsSubject.asObservable();

  private filteredProductsSubject = new BehaviorSubject<any[]>([]);
  filteredProducts$: Observable<any[]> =
    this.filteredProductsSubject.asObservable();

  constructor(private api:ApiService) { }
  fetchProducts(): void {
    this.api
      .request('GET', `products`)
      .subscribe((response: any) => {
        const products = response.products;

        this.productsSubject.next(products);
        this.filteredProductsSubject.next([...products]);
      });
  }
  updateFilteredProducts(filteredProducts: any[]) {
    this.filteredProductsSubject.next(filteredProducts);
  }

}
