import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/types/item.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResultsSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);

  public searchResults$: Observable<any[]> =
    this.searchResultsSubject.asObservable();

  private categoriesSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  categories$: Observable<string[]> = this.categoriesSubject.asObservable();

  constructor(private api: ApiService) {}

  getCategories() {
    this.api.request('GET', 'products/categories').subscribe(
      (response: any) => {
        this.categoriesSubject.next(response);
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  search(query: string, category: string): void {
    this.api.request('GET', `products/search?q=${query}`).subscribe(
      (response: any) => {
        let filteredProducts = response.products;

        if (category) {
          filteredProducts = filteredProducts.filter((item: any) => {
            return item.category === category;
          });
        }

        this.searchResultsSubject.next(filteredProducts);
      },
      (error: any) => {
        console.error('Error searching:', error);
      }
    );
  }
}
