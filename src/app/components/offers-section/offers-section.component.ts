import { FilterOffersService } from './../../Services/filter-offers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-section',
  templateUrl: './offers-section.component.html',
  styleUrls: ['./offers-section.component.scss']
})
export class OffersSectionComponent implements OnInit {
  products: any[] = [];
  bestSellerProducts: any[] = [];
  megaOffers: any[] = [];
  topRatedProducts: any[] = [];

  constructor(private filterService: FilterOffersService) {}

  ngOnInit() {
    this.filterService.fetchProducts();
    this.filterService.products$.subscribe((products) => {
      this.products = products;
      this.filterBestsellers();
      this.filterTopRated();
      this.filterMegaOffers();
      console.log(products);
    });
  }

  filterBestsellers() {
    const filteredProducts = this.products.slice();
    filteredProducts.sort((a: any, b: any) => {
      return b.stock - a.stock;
    });
    this.bestSellerProducts = filteredProducts.slice(0, 4);
  }

  filterTopRated() {
    const filteredProducts = this.products.slice();
    filteredProducts.sort((a: any, b: any) => {
      return b.rating - a.rating;
    });
    this.topRatedProducts = filteredProducts.slice(0, 4);
  }

  filterMegaOffers() {
    const filteredProducts = this.products.slice();
    filteredProducts.sort((a: any, b: any) => {
      return b.discount - a.discount;
    });
    this.megaOffers = filteredProducts.slice(0, 4);
  }
}
