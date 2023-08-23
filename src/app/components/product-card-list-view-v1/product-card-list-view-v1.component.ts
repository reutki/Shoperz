import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card-list-view-v1',
  templateUrl: './product-card-list-view-v1.component.html',
  styleUrls: ['./product-card-list-view-v1.component.scss'],
})
export class ProductCardListViewV1Component {
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

  constructor() {
    this.formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(this.product.price);
  }
}
