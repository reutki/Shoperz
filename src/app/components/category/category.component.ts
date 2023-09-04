import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}
  filteredProductsSubscription: any;
  products: any[] = [];
  category: string | null = '';
  minPrice: number = 0;
  maxPrice: number = 100;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('categoryName');
      this.fetchProducts(category ?? '');
    });
  }

  fetchProducts(category: string) {
    this.productService.fetchProducts(category);
    this.filteredProductsSubscription =
      this.productService.filteredProducts$.subscribe((products) => {
        this.products = products;
      });
  }
  ngOnDestroy() {
    if (this.filteredProductsSubscription) {
      this.filteredProductsSubscription.unsubscribe();
    }
  }
}
