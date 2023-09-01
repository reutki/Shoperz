import { Component, Input, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from 'src/types/cart.interface';
import { Product } from 'src/types/item.interface';

@Component({
  selector: 'app-product-card-list-view-v1',
  templateUrl: './product-card-list-view-v1.component.html',
  styleUrls: ['./product-card-list-view-v1.component.scss'],
})
export class ProductCardListViewV1Component implements OnDestroy {
  @Input() inProfilePage = false;
  @Input() product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 4.69,
    stock: 94,
    brand: '',
    category: '',
    thumbnail: '...',
    images: ['https://www.farmaku.com/assets/images/no-img-frame.png'],
  };
  productQuantity: number | undefined = 0;
  cartSubscription: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.cart$.subscribe((cart) => {
      const product = cart.products.find(
        (product) => product.id === Number(this.product.id)
      );
      this.productQuantity = product?.quantity;
      console.log(product, 123, cart);
    });
  }

  addToCart(item: Product): void {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      total: item.price,
      discountPercentage: item.discountPercentage,
      discountedPrice: item.price * (item.discountPercentage / 100),
      quantity: this.productQuantity ? ++this.productQuantity : 1,
    };
    this.cartService.addToCart(
      cartItem,
      this.product.id || Number(this.product.id)
    );
  }

  removeItem() {
    this.cartService.removeItem(this.product.id);
  }

  ngOnDestroy(): void {
    this.cartSubscription = this.cartSubscription.unsubscribe();
  }
}
