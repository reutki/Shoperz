import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bundle-card',
  templateUrl: './bundle-card.component.html',
  styleUrls: ['./bundle-card.component.scss'],
})
export class BundleCardComponent {
  @Input() Title: string = '';
  @Input() Category: string = '';
  @Input() Price: string = '';
  @Input() Image: string = '';
}
