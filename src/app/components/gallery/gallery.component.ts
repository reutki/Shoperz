import { Component, OnDestroy, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from 'src/types/cart.interface';
import { Product } from 'src/types/item.interface';
// import "../../../assets/bag-b.svg"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnDestroy {
  productId = window.location.href
    .slice(window.location.href.lastIndexOf('/') + 1)
    .replace(/\)/gi, '');
  images!: GalleryItem[];
  product: Product = {
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
  cartServiceSubscription;
  productCount = 0;

  modifyProductCount(operation: string) {
    if (operation === '-' && this.productCount > 0) {
      this.productCount--;
    }
    if (operation === '+') {
      this.productCount++;
    }
  }

  constructor(private cartService: CartService) {
    this.cartServiceSubscription = this.cartService.cart$;
  }

  addToCart(item: Product, id: number): void {
    const cartItem: CartItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      total: item.price,
      discountPercentage: item.discountPercentage,
      discountedPrice: item.price * (item.discountPercentage / 100),
      quantity: 1,
    };
    this.cartService.addToCart(cartItem, id); // Assuming user id is 5
  }

  ngOnInit() {
    fetch(`https://dummyjson.com/products/${this.productId}`)
      .then((res) => res.json())
      .then((product) => (this.product = product))
      .catch(console.log)
      .finally(() => {
        this.images = this.product.images.map(
          (image) => new ImageItem({ src: image, thumb: image })
        );
      });
  }

  ngOnDestroy(): void {
    this.cartServiceSubscription && this.cartServiceSubscription;
  }
}
