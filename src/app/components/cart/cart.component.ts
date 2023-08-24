import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  // @Input() isOpen: boolean = true;
  isOpen = true;
  total = 1;
  cart: any[] = [];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;

    // Subscribe to isOpen$ and total$ observables
    this.cartService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });

    this.cartService.total$.subscribe(total => {
      this.total = total;
    });
  }

  toggleCart(): void {
    this.cartService.handleClose(); 
  }

  clearCart(): void {
    this.cart = this.cartService.clearCart();
  }

  removeFromCart(id: string) {
    // Implement the removeFromCart logic here
  }

  // addToCart = (game, id) => {
  //   if (!this.cart.find((game) => game.id == id)) {
  //     this.cart.push(game);
  //   }
  // };

  // removeFromCart = (id) => {
  //   const newCart = cart.filter((game) => game.id !== id);
  //   this.cart.push(newCart);
  // };

  // clearCart = () => {
  //   this.cart.push([]);
  // };
}
