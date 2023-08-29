import { Component, OnInit } from '@angular/core';
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
export class GalleryComponent implements OnInit {
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

  productCount = 1;

  modifyProductCount(operation: string) {
    if (operation === '-' && this.productCount > 0) {
      this.productCount--;
    }
    if (operation === '+') {
      this.productCount++;
    }
  }

  constructor(private cartService: CartService) {}

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

    // this.images = [
    //   new ImageItem({
    //     src: 'https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png',
    //     thumb:
    //       'https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png',
    //   }),
    //   new ImageItem({
    //     src: 'https://images.macrumors.com/t/rVFMv95D6F0qtw436lHIuu0-p4I=/1600x/article-new/2020/10/iphone-13-models.jpg',
    //     thumb:
    //       'https://images.macrumors.com/t/rVFMv95D6F0qtw436lHIuu0-p4I=/1600x/article-new/2020/10/iphone-13-models.jpg',
    //   }),
    //   new ImageItem({
    //     src: '../../../assets/card.svg',
    //     thumb: '../../../assets/card.svg',
    //   }),
    //   new ImageItem({
    //     src: '../../../assets/payments.svg',
    //     thumb: '../../../assets/payments.svg',
    //   }),
    //   new ImageItem({
    //     src: '../../../assets/truck.svg',
    //     thumb: '../../../assets/truck.svg',
    //   }),
    // ];
  }
}
