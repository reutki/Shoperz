import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss'],
})
export class RatingCardComponent {
  checkboxStates: boolean[] = [false, false, false, false, false];
  products: any[] = [];

  toggleCheckbox(event: Event, index: number) {
    event.stopPropagation();
    event.preventDefault();
    let checked = this.checkboxStates[index];
    this.applyPriceFilter(index);
    this.checkboxStates = Array(6).fill(false);
    this.checkboxStates[index] = !checked;
  }
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }

  applyPriceFilter(index: number) {
    const filteredProducts = this.products.filter((product) => {
      return Math.ceil(product.rating) === 5 - index;
    });
    this.productService.updateFilteredProducts(filteredProducts);
  }
}
