import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Cart, CartItem } from '../../../types/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartIsOpen = true;
  cart: Cart | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
    });

    this.cartService.isOpen$.subscribe((isOpen) => {
      this.cartIsOpen = isOpen;
    });

    this.cartService.fetchCartData(5);
  }

  removeItem(id: number): void {
    this.cartService.removeItem(id);
  }

  addToCart(item: CartItem, id: number): void {
    this.cartService.addToCart(item, id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}