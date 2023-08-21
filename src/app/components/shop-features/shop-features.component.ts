import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-features',
  templateUrl: './shop-features.component.html',
  styleUrls: ['./shop-features.component.scss'],
})
export class ShopFeaturesComponent {
  features = [
    {
      img: 'guard.svg',
      title: "Guarantee",
      subtitle: "24 Months"
    },
    {
      img: 'card.svg',
      title: "Rate Paying",
      subtitle: "4 - 12 Months"
    },
    {
      img: 'payments.svg',
      title: "Payments",
      subtitle: "Secured"
    },
    {
      img: 'truck.svg',
      title: "Free Delivery",
      subtitle: "from $100"
    },
    {
      img: 'brands.svg',
      title: "Brands",
      subtitle: "Only Top"
    },
  ];
}
