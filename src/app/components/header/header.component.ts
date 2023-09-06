import { AppwrapperComponent } from './../appwrapper/appwrapper.component';
import { AuthService } from 'src/app/Services/auth.service';
import { SearchService } from './../../Services/search.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() toggle: () => void = function x() {
    return;
  };

  isHidden: boolean = true;
  prevScrollpos = window.pageYOffset;
  currentScrollPos = window.pageYOffset;
  scrollTimeout: any;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.currentScrollPos = window.pageYOffset;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isHidden = window.scrollY > 0;

      if (this.prevScrollpos < this.currentScrollPos) {
        this.isHidden = true;
      } else if (this.prevScrollpos > this.currentScrollPos) {
        this.isHidden = false;
      }

      this.prevScrollpos = this.currentScrollPos;
    }, 100);
  }

  query: string = '';
  categorySelected: string = '';
  categories: string[] = [];
  results: any[] = [];
  constructor(
    public AppwrapperComponent: AppwrapperComponent,
    public cartService: CartService,
    private searchService: SearchService,
    public authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.searchService.categories$.subscribe((categories) => {
      this.categories = categories;
    });
    this.searchService.getCategories();
    this.results = JSON.parse(localStorage.getItem('prevSearchRes') || '[]');
  }

  redirectTo(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate([
          '/',
          { outlets: { categories: ['product', id] } },
        ])
      );
  }

  childToggle() {
    this.toggle();
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
