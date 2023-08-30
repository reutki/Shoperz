import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-card-v2',
  templateUrl: './product-card-v2.component.html',
  styleUrls: ['./product-card-v2.component.scss'],
})
export class ProductCardV2Component {
  @Input() Title = '';
  @Input() Rating = 0;
  @Input() Price = 0;
  @Input() Image = '';
  @Input() Discount = 0;
  @Input() Id = 0; // * i added the id
  quantity = 0;

  constructor(private cartService: CartService) {}
  addToCart() {
    const item = {
      id: this.Id,
      title: this.Title,
      price: this.Price,
      quantity: ++this.quantity,
      total: this.quantity * this.Price,
      discountPercentage: this.Discount,
      discountedPrice: this.Price * (this.Discount / 100),
    };
    this.cartService.addToCart(item, this.Id);
  }
}
