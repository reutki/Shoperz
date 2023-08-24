import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReviewModalComponent } from '../review-modal/review-modal.component';

@Component({
  selector: 'app-tabs-product',
  templateUrl: './tabs-product.component.html',
  styleUrls: ['./tabs-product.component.scss'],
})
export class TabsProductComponent {
  ratings: Array<number> = [5, 4, 3, 2, 1];
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ReviewModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
