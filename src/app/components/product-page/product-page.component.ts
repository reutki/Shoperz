import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  ratingFromTabsProduct: number = 420;

  constructor() {}

  onRatingFromTabs(newRating: number) {
    this.ratingFromTabsProduct = newRating;
  }
}
