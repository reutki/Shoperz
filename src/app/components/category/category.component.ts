import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  products: any[] = [];
  category: string | null = '';

  ngOnInit() {
    // Retrieve the category parameter from the URL
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('categoryName');
      this.getProducts();
    });
  }

  getProducts() {
    this.api
      .request('GET', `products/category/${this.category}?limit=0`)
      .subscribe((response: any) => {
        this.products = response.products;
        console.log(this.products);
      });
  }
}
