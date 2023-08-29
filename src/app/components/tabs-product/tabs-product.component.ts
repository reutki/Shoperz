import { ReviewsService } from './../../Services/reviews.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReviewModalComponent } from '../review-modal/review-modal.component';

@Component({
  selector: 'app-tabs-product',
  templateUrl: './tabs-product.component.html',
  styleUrls: ['./tabs-product.component.scss'],
})
export class TabsProductComponent implements OnInit {
  ratings: Array<number> = [5, 4, 3, 2, 1];
  reviews: any[]=[]
  paginatedReviews: any[]=[]
  itemsPerPage:number=5;
  activePage: number = 0;
  ratingCounts: { [key: number]: number } = {};
  amountOfRatings:number =0
  rating:number = 0

  constructor(public dialog: MatDialog,private reviewsService:ReviewsService) {}
  ngOnInit() {
    this.reviewsService.getReviews();
    this.reviewsService.reviews$.subscribe((review) => {
      this.reviews = review;
      this.paginatedReviews = this.reviews.slice(0, this.itemsPerPage);
      this.ratings.forEach((rating) => {
        this.ratingCounts[rating] = this.reviews.filter((review) => Math.round(review.rating) === rating).length;
        this.rating=(this.rating + rating)
      });
      this.amountOfRatings=this.reviews.length
    });
  }
  onPageChange(paginatedReviews: any[]) {
    this.paginatedReviews = paginatedReviews;
  console.log(paginatedReviews);

  }

  openDialog() {
    const dialogRef = this.dialog.open(ReviewModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
