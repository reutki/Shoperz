import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-card-v1',
  templateUrl: './product-card-v1.component.html',
  styleUrls: ['./product-card-v1.component.scss'],
})
export class ProductCardV1Component {
  @Input() Category: string | undefined = '';
  @Input() Price: number = 0;
  @Input() Discount: number = 0;
  @Input() Image: string = '';
  @Input() Title: string = '';
  @Input() Id: number = 0;

  @Input() product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 4.69,
    stock: 94,
    brand: '',
    category: '',
    thumbnail: '...',
    images: ['https://www.farmaku.com/assets/images/no-img-frame.png'],
  };

  quantity = 0;

  constructor(private router: Router, private cartService: CartService) {}

  goToProduct() {
    this.router.navigate(['/', 'product', this.Id]); // * changed id
  }

  addToCart(e: Event) {
    e.stopPropagation();

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
