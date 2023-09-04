import { Component, OnDestroy, Input } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ApiService } from 'src/app/Services/api.service';
import { CartService } from 'src/app/Services/cart.service';
import { CartItem } from 'src/types/cart.interface';
import { Product } from 'src/types/item.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnDestroy {
  @Input() rating = 69;
  productId = window.location.href
    .slice(window.location.href.lastIndexOf('/') + 1)
    .replace(/\)/gi, '');
  images!: GalleryItem[];
  productQuantity: number | undefined = 0;
  product: Product = {
    quantity: 0,
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
  cartSubscription: any;

  modifyProductCount(operation: '+' | '-') {
    const quantity = this.product.quantity;
    if (operation === '-' && quantity !== undefined && quantity > 0) {
      this.product.quantity !== undefined && this.product.quantity--;
      this.cartService.updateQuantity(this.product.id, '-');
    }
    if (operation === '+') {
      this.product.quantity !== undefined && this.product.quantity++;
      this.cartService.updateQuantity(this.product.id, '+');
    }
  }

  constructor(
    public cartService: CartService,
    private apiService: ApiService
  ) {}

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
    this.cartService.addToCart(cartItem, id);
    if (this.product.quantity !== undefined) this.product.quantity++;
  }

  ngOnInit() {
    this.apiService
      .request<Product>('GET', `products/${this.productId}`)
      .subscribe(
        (product) => {
          this.product = { ...product, quantity: 0, rating: this.rating };
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.images = this.product.images.map(
            (image) => new ImageItem({ src: image, thumb: image })
          );
        }
      );
    this.cartSubscription = this.cartService.cart$.subscribe((cart) => {
      const product = cart.products.find(
        (product) => product.id === Number(this.productId)
      );
      this.productQuantity = product?.quantity;
      setTimeout(() => {
        this.product.rating = Number(this.rating.toPrecision(2));
      }, 800);
    });
  }

  colors = [
    'black',
    'aliceblue',
    '#319DFF',
    '#FFDE31',
    '#FF316A',
    '#0DA678',
    '#9E13F3',
    '#FFAA04',
    '#FF64DD',
    '#17D1DD',
  ];
  categories = [
    'smartphones',
    'laptops',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'sunglasses',
    'automotive',
    'motorcycle',
  ];

  ngOnDestroy(): void {
    this.cartSubscription = this.cartSubscription.unsubscribe();
  }
}
