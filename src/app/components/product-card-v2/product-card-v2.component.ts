import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-v2',
  templateUrl: './product-card-v2.component.html',
  styleUrls: ['./product-card-v2.component.scss']
})
export class ProductCardV2Component {
  @Input() Title =''
  @Input() Rating =0
  @Input() Price =''
  @Input() Image =''
  @Input() Discount =0
}
