import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from 'src/types/item.interface';

@Component({
  selector: 'app-product-card-v1',
  templateUrl: './product-card-v1.component.html',
  styleUrls: ['./product-card-v1.component.scss'],
})
export class ProductCardV1Component {
  @Input() Product: Product = {
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

  quantity = 0;

  constructor(private router: Router, private cartService: CartService) {}

  redirectTo(id: number) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigate([
          '/',
          { outlets: { categories: ['product', id] } },
        ])
      );
    window.scrollTo(0, 0);
  }

  goToProduct() {
    this.router.navigate(['/', 'product', this.Product.id]);
  }

  addToCart(e: Event) {
    e.stopPropagation();

    const quantity = this.Product.quantity ?? 1;
    const item = {
      id: this.Product.id,
      title: this.Product.title,
      price: this.Product.price,
      quantity,
      total: quantity * this.Product.price,
      discountPercentage: this.Product.discountPercentage,
      discountedPrice:
        this.Product.price * (this.Product.discountPercentage / 100),
    };

    this.cartService.addToCart(item, item.id);
  }
}
