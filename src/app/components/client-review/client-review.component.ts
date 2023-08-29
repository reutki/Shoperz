import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.scss']
})
export class ClientReviewComponent {
  @Input() Description =''
  @Input() Rating =0
  @Input() Title =''
  @Input() Username =''
  @Input() Date =''
}
