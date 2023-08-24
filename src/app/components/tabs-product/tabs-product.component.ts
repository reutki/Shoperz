import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-product',
  templateUrl: './tabs-product.component.html',
  styleUrls: ['./tabs-product.component.scss'],
})
export class TabsProductComponent {
  ratings: Array<number> = [5, 4, 3, 2, 1];
}
