import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from 'src/types/item.interface';

@Component({
  selector: 'app-product-card-v2',
  templateUrl: './product-card-v2.component.html',
  styleUrls: ['./product-card-v2.component.scss'],
})
export class ProductCardV2Component {
  @Input() Product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [''],
    quantity: 0,
  };

  constructor(private cartService: CartService) {}
  addToCart() {
    const quantity = this.Product.quantity ?? 1;
    const item = {
      id: this.Product.id,
      title: this.Product.title,
      price: this.Product.price,
      quantity,
      total: quantity * this.Product.price,
      discountPercentage: this.Product.discountPercentage,
      discountedPrice:
        this.Product.price * (this.Product.discountPercentage / 100),
    };

    this.cartService.addToCart(item, item.id);
  }
}
