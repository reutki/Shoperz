import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-categories-nav-bar',
  templateUrl: './categories-nav-bar.component.html',
  styleUrls: ['./categories-nav-bar.component.scss'],
})
export class CategoriesNavBarComponent {
  mainCategories: any[] = [];
  dropdownCategories: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.api.request('GET', 'products/categories').subscribe(
      (response: any) => {
        if (response.length > 5) {
          this.mainCategories = response.slice(0, 5);
          this.dropdownCategories = response.slice(5);
        } else {
          this.mainCategories = response;
        }
      },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
