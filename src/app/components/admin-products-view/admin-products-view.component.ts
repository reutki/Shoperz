import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { PdfGeneratorService } from 'src/app/Services/pdfGenerator.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-admin-products-view',
  templateUrl: './admin-products-view.component.html',
  styleUrls: ['./admin-products-view.component.scss']
})
export class AdminProductsViewComponent implements OnInit {
  categories: any[] = [];
  categorySelected:string=''

  constructor(private api: ApiService,public productsService:ProductsService, private pdfGenerateService:PdfGeneratorService){}

ngOnInit(): void {
  this.getCategories();
}

generatePdf(){
console.log(this.productsService.productsSubject.value);
    this.pdfGenerateService.generatePDF('products-list',this.productsService.productsSubject.value )}

    getCategories() {
      this.api.request('GET', 'products/categories').subscribe(
        (response: any) => {
            this.categories = response;
        },
        (error: any) => {
          console.error('Error fetching categories:', error);
        }
      );
    }

    getTable(){
  this.productsService.fetchProducts(this.categorySelected)
    }

}
