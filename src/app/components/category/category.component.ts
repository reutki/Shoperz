import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  products: any[] = [];
  category: string | null = '';
  minPrice: number = 0;
  maxPrice: number = 100;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('categoryName');
      this.fetchProducts();
    });
  }

  fetchProducts() {
    this.productService.fetchProducts(this.category!);
    this.productService.filteredProducts$.subscribe((products) => {
      this.products = products;
    });
  }
}
