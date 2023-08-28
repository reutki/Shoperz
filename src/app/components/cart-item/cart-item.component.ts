import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from 'src/types/cart.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() item!: CartItem;

  constructor(private cartService: CartService) {}

  decreaseAmount(id: number): void {
    this.cartService.updateQuantity(id, '-');
  }

  increaseAmount(id: number): void {
    this.cartService.updateQuantity(id, '+');
  }
  removeItem(id: number): void {
    this.cartService.removeItem(id);
  }

  addToCart(item: CartItem, id: number): void {
    this.cartService.addToCart(item, id);
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
