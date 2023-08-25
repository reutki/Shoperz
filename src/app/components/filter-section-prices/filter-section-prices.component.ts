import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filter-section-prices',
  templateUrl: './filter-section-prices.component.html',
  styleUrls: ['./filter-section-prices.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FilterSectionPricesComponent {
  checkboxStates: boolean[] = [false, false, false, false, false];

  maxPriceVal = false;

  priceInterval = false;
  min = 0;
  max = 500;

  toggleCheckbox(event: Event, index: number) {
    event.stopPropagation();
    event.preventDefault();
    this.checkboxStates[index] = !this.checkboxStates[index];
  }
}
