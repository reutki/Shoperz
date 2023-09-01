import { AdminService } from './../../Services/admin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.scss']
})
export class AdminProductFormComponent {
  productData = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
    quantity: 0,
  };
constructor(private adminService:AdminService){}


addProduct(){
  this.adminService.addProduct(this.productData).subscribe(
    (response) => {
      console.log('Product added successfully:', response);

      // reset the form
      this.productData = {
        id: 0,
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        category: '',
        thumbnail: '',
        images: [],
        quantity: 0,
      };
    },
    (error) => {
      console.error('Error adding product:', error);
    }
  );}
}
