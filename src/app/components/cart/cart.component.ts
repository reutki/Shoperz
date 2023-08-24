import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  isOpen = false;
  cart: any[] = [
    {
      id: 'productId',
      title: 'title',
      thumbnail: 'https://www.freetogame.com/g/21/thumbnail.jpg',
    },
    {
      id: 'productId',
      title: 'title',
      thumbnail: 'https://www.freetogame.com/g/21/thumbnail.jpg',
    },
  ];
  total = 0;
  handleClose(): void {
    // Implement the handleClose logic here
  }

  clearCart(): void {
    // Implement the clearCart logic here
  }

  removeFromCart(id: string) {}

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
