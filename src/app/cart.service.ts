import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = [
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
  private isOpenSubject = new BehaviorSubject<boolean>(true);
  isOpen$ = this.isOpenSubject.asObservable();
  private totalSubject = new BehaviorSubject<number>(0);
  total$ = this.totalSubject.asObservable();

  handleClose(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  clearCart(): any[] {
    this.cart = [];
    return this.cart;
  }

  removeFromCart(id: string) {}
}
