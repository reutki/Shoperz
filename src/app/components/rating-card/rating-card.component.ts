import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss'],
})
export class RatingCardComponent {
  checkboxStates: boolean[] = [false, false, false, false, false];

  toggleCheckbox(event: Event, index: number) {
    event.stopPropagation();
    this.checkboxStates[index] = !this.checkboxStates[index];
  }
}
