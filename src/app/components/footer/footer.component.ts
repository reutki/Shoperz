import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  links = [
    'https://cdn-icons-png.flaticon.com/512/733/733635.png',
    'https://cdn-icons-png.flaticon.com/512/3128/3128208.png',
    'https://cdn-icons-png.flaticon.com/512/1384/1384031.png',
    'https://cdn-icons-png.flaticon.com/512/3128/3128219.png',
    'https://cdn-icons-png.flaticon.com/512/152/152810.png',
  ];
  categories = [
    'smartphones',
    'laptops',
    'lighting',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'fragrances',
  ];
  usefulLinks = [
    'Useful Links',
    'About',
    'Contact',
    'Wishlist',
    'Compare',
    'FAQ',
    'Terms & Conditions',
    'Privacy Policy',
    'Cookie Policy',
  ];
  customerService = [
    'My Account',
    'My Cart',
    'Track Order',
    'Returns & Exchanges',
    'Repair Services',
    'Support',
  ];
}
