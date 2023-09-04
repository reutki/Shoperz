import { AuthService } from 'src/app/Services/auth.service';
import { SearchService } from './../../Services/search.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
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
    public cartService: CartService,
    private searchService: SearchService,
    public authService: AuthService
  ) {}
  ngOnInit() {
    this.searchService.categories$.subscribe((categories) => {
      this.categories = categories;
    });
    this.searchService.getCategories();
    this.results = JSON.parse(localStorage.getItem('prevSearchRes') || '[]');
  }

  searchItem() {
    // Unsubscribe from previous search request
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    // Subscribe to search action after debounce time
    this.searchSubscription = this.searchService.searchResults$
      .pipe(debounceTime(400))
      .subscribe((result: any[]) => {
        this.results = result;
        localStorage.setItem('prevSearchRes', JSON.stringify(result));
      });

    // Trigger the search immediately
    this.searchService.search(this.query, this.categorySelected);
  }

  private searchSubscription: Subscription | undefined;
}
