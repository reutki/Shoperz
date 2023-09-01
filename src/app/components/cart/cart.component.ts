import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from '../../../types/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
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
}
