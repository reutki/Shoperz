import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-section-prices',
  templateUrl: './filter-section-prices.component.html',
  styleUrls: ['./filter-section-prices.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilterSectionPricesComponent implements OnDestroy {
  checkboxStates: boolean[] = Array(6).fill(false);
  // x = [50, 100, 200, 300, 400, 500];

  noPriceFilter = false;
  priceInterval = false;
  min = 0;
  max = 40;
  products: any[] = [];
  private productsSubscription: Subscription | undefined;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productsSubscription = this.productService.products$.subscribe(
      (products) => {
        this.products = products;
      }
    );
  }

  applyPriceFilter(min = this.min, max = this.max) {
    const filteredProducts = this.products.filter((product) => {
      return product.price >= min && product.price <= max;
    });
    this.productService.updateFilteredProducts(filteredProducts);

    console.log(this.productService.filteredProducts$);
  }

  toggleCheckbox(event: Event, index: number) {
    event.stopPropagation();
    event.preventDefault();
    let checked = this.checkboxStates[index];
    this.checkboxStates = Array(6).fill(false);
    this.checkboxStates[index] = !checked;
    let min = 0,
      max = Infinity;
    if (index > 0 && index < 5 && !checked) {
      min = index * 100;
      max = (index + 1) * 100;
    }
    if (index === 0 && !checked) max = 50;
    if (index === 5 && !checked) min = 500;
    this.applyPriceFilter(min, max);
  }

  toggleNoPrice() {
    if (!this.noPriceFilter) {
      console.log(this.noPriceFilter);
      this.checkboxStates = Array(5).fill(false);
    }
    this.noPriceFilter = !this.noPriceFilter;
  }

  ngOnDestroy(): void {
    this.productsSubscription && this.productsSubscription.unsubscribe();
  }
}
