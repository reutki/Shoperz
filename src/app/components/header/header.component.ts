import { SearchService } from './../../Services/search.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  query: string = '';
  categorySelected: string = '';
  categories: string[] = [];
  results: any[] = [];
  constructor(
    private cartService: CartService,
    private searchService: SearchService
  ) {}
  ngOnInit() {
    this.searchService.categories$.subscribe((categories) => {
      this.categories = categories;
    });
    this.searchService.getCategories();
  }
  toggleCart() {
    this.cartService.toggleCart();
  }
  searchItem() {
    // Unsubscribe from previous search request
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    // Debounce time (milliseconds)
    const debounceTimeValue = 400;

    // Subscribe to search action after debounce time
    this.searchSubscription = this.searchService.searchResults$
      .pipe(debounceTime(debounceTimeValue))
      .subscribe((result: any[]) => {
        this.results = result;
        console.log(this.results);
      });

    // Trigger the search immediately
    this.searchService.search(this.query, this.categorySelected);
  }

  private searchSubscription: Subscription | undefined;
}
