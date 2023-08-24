import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
})
export class ReviewModalComponent {
  constructor(public dialog: MatDialog) {}
}
