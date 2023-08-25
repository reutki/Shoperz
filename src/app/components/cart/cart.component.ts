import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Cart } from '../../../types/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  isOpen = true;
  total = 1;
  cart: Cart[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe((cart) => (this.cart = cart));

    this.cartService.isOpen$.subscribe((isOpen) => {
      this.isOpen = isOpen;
    });

    this.cartService.total$.subscribe((total) => {
      this.total = total;
    });
  }

  removeItem = (id: number) => {
    this.cartService.removeItem(id);
    console.log(id);
  };

  toggleCart(): void {
    this.cartService.handleClose();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
