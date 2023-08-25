import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-v1',
  templateUrl: './product-card-v1.component.html',
  styleUrls: ['./product-card-v1.component.scss'],
})
export class ProductCardV1Component {
  @Input() Category? = '';
  @Input() Price = 0;
  @Input() Discount? = 0;
  @Input() Image = '';
  @Input() Title = '';
}
