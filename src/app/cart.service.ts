import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../types/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private isOpenSubject = new BehaviorSubject<boolean>(true);
  isOpen$ = this.isOpenSubject.asObservable();
  private cartSubject = new BehaviorSubject<Cart[]>([
    {
      id: 1,
      title: 'title',
      thumbnail: 'https://www.freetogame.com/g/21/thumbnail.jpg',
    },
    {
      id: 2,
      title: 'title',
      thumbnail: 'https://www.freetogame.com/g/21/thumbnail.jpg',
    },
  ]);
  cart$ = this.cartSubject.asObservable();
  private totalSubject = new BehaviorSubject<number>(0);
  total$ = this.totalSubject.asObservable();

  handleClose(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }

  removeItem(id: number): void {
    this.cartSubject.next(
      this.cartSubject.value.filter((item) => item.id !== id)
    );
    console.log(this.cartSubject);
  }
  addToCart = (item: Cart, id: number) => {
    const existingItem = this.cartSubject.value.find(
      (existingItem) => existingItem.id === id
    );

    if (!existingItem) {
      const updatedCart = [...this.cartSubject.value, item];
      this.cartSubject.next(updatedCart);
    }
  };
}
