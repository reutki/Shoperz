import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from 'src/types/cart.interface';
import { Product } from 'src/types/item.interface';

@Component({
  selector: 'app-product-card-list-view-v1',
  templateUrl: './product-card-list-view-v1.component.html',
  styleUrls: ['./product-card-list-view-v1.component.scss'],
})
export class ProductCardListViewV1Component {
  product = {
    id: 1,
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
  productId = window.location.href
    .slice(window.location.href.lastIndexOf('/') + 1)
    .replace(/\)/gi, '');

  constructor(private cartService: CartService) {}

  addToCart(item: Product): void {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      total: item.price,
      discountPercentage: item.discountPercentage,
      discountedPrice: item.price * (item.discountPercentage / 100),
      quantity: 1,
    };
    this.cartService.addToCart(cartItem, 5); // Assuming user id is 5
  }

  ngOnInit() {
    // fetch(`https://dummyjson.com/products/${this.productId}`)
    //   .then((res) => res.json())
    //   .then((product) => (this.product = product))
    //   .catch(console.log)
    //   .finally(() => console.log(this.product, 5678));
  }
}
