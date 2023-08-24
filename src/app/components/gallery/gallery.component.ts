import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
// import "../../../assets/bag-b.svg"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: GalleryItem[];

  product = {
    id: 1,
    title: 'iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: '...',
    images: [
      'https://www.reliancedigital.in/medias/Apple-MLPF3HN-A-Smart-Phone-491997699-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTU5NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDU5L2hlOC85ODc4MDkwMDg4NDc4LmpwZ3wxNGQzODYyZWJiYjYwZDVjZjNhM2Q5YzQ4ZmE5OTljMmZiYmM2MDE0ZjE1YzhhMTRmYjM2ZDkzZGEyODcxNTU2',
    ],
  };

  formattedPrice: string;

  productCount = 1;

  modifyProductCount(operation: string) {
    if (operation === '-' && this.productCount > 0) {
      this.productCount--;
    }
    if (operation === '+') {
      this.productCount++;
    }
  }

  constructor() {
    this.images = [];
    this.formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(this.product.price);
  }

  ngOnInit() {
    // Set items array
    this.images = [
      new ImageItem({
        src: 'https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png',
        thumb: 'https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png',
      }),
      new ImageItem({
        src: 'https://images.macrumors.com/t/rVFMv95D6F0qtw436lHIuu0-p4I=/1600x/article-new/2020/10/iphone-13-models.jpg',
        thumb: 'https://images.macrumors.com/t/rVFMv95D6F0qtw436lHIuu0-p4I=/1600x/article-new/2020/10/iphone-13-models.jpg',
      }),
      new ImageItem({
        src: '../../../assets/card.svg',
        thumb: '../../../assets/card.svg',
      }),
      new ImageItem({
        src: '../../../assets/payments.svg',
        thumb: '../../../assets/payments.svg',
      }),
      new ImageItem({
        src: '../../../assets/truck.svg',
        thumb: '../../../assets/truck.svg',
      }),
    ];
  }
}
