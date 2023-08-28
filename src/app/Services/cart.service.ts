import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart, CartItem } from '../../types/cart.interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();
  private cartSubject = new BehaviorSubject<Cart>({
    id: 1,
    products: [],
    total: 0,
    discountedTotal: 0,
    userId: 0,
    totalProducts: 0,
    totalQuantity: 0,
  });
  cart$: Observable<Cart> = this.cartSubject.asObservable();
  constructor(private apiService: ApiService) {}

  fetchCartData(userId: number): void {
    this.apiService.request('GET', `carts/user/${userId}`).subscribe(
      (response: any) => {
        if (response.carts.length > 0) {
          this.cartSubject.next(response.carts[0]);
        }
      },
      (error: any) => {
        console.error('Error fetching cart data:', error);
      }
    );
  }

  clearCart(): void {
    const currentCart = this.cartSubject.value;
    this.apiService.request('DELETE', `carts/${currentCart.id}`).subscribe(
      (response: any) => {
        if (response.isDeleted) {
          const emptyCart: Cart = {
            id: currentCart.id,
            products: [],
            total: 0,
            discountedTotal: 0,
            userId: currentCart.userId,
            totalProducts: 0,
            totalQuantity: 0,
          };
          this.cartSubject.next(emptyCart);
        }
      },
      (error: any) => console.log(error),
      () => console.log(1)
    );
  }

  removeItem(id: number): void {
    const currentCart = this.cartSubject.value;
    const updatedProducts = currentCart.products.filter(
      (item) => item.id !== id
    );
    const updatedCart = { ...currentCart, products: updatedProducts };
    this.cartSubject.next(updatedCart);
    console.log(this.cartSubject);
  }

  addToCart(item: CartItem, id: number): void {
    const existingItem = this.cartSubject.value.products.find(
      (existingItem) => existingItem.id === id
    );

    if (!existingItem) {
      const updatedProducts = [...this.cartSubject.value.products, item];
      const updatedCart = {
        ...this.cartSubject.value,
        products: updatedProducts,
      };
      this.cartSubject.next(updatedCart);
      this.updateCart(id, updatedProducts);
      console.log('addToCart', existingItem, updatedCart);
    }
  }

  updateCart(cartId: number, products: CartItem[]) {
    const body = {
      merge: true,
      products,
    };

    this.apiService
      .request('PUT', `carts/${cartId}`, body)
      .subscribe((response: any) => console.log(response));
    console.log(this.cart$);
  }

  toggleCart(): void {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  updateQuantity(id: number, operation: '-' | '+'): void {
    const currentCart = this.cartSubject.value;
    const updatedProducts = currentCart.products.map((item) => {
      if (item.id === id && item.quantity > 1 && operation === '-') {
        return { ...item, quantity: item.quantity - 1 };
      }
      if (item.id === id && item.quantity >= 1 && operation === '+') {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    const total = updatedProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const totalQuantity = updatedProducts.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const updatedCart = {
      ...currentCart,
      products: updatedProducts,
      total: total,
      totalQuantity: totalQuantity,
    };

    this.cartSubject.next(updatedCart);
    this.updateCart(currentCart.id, updatedProducts);
  }
}
