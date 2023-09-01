import { Component, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Cart, CartItem } from '../../../types/cart.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnDestroy {
  cartIsOpen = true;
  cart: Cart | undefined;
  private cartSubscription: Subscription | undefined;
  private isOpenSubscription: Subscription | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
    });

    this.isOpenSubscription = this.cartService.isOpen$.subscribe((isOpen) => {
      this.cartIsOpen = isOpen;
    });

    this.cartService.fetchCartData(Number(localStorage.getItem('userId')));
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

  ngOnDestroy(): void {
    this.cartSubscription && this.cartSubscription.unsubscribe();
    this.isOpenSubscription && this.isOpenSubscription.unsubscribe();
  }
}
