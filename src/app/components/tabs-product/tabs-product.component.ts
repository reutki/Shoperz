import { ReviewsService } from './../../Services/reviews.service';
import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewModalComponent } from '../review-modal/review-modal.component';

@Component({
  selector: 'app-tabs-product',
  templateUrl: './tabs-product.component.html',
  styleUrls: ['./tabs-product.component.scss'],
})
export class TabsProductComponent implements OnDestroy {
  ratings: Array<number> = [5, 4, 3, 2, 1];
  reviews: any[] = [];
  paginatedReviews: any[] = [];
  itemsPerPage: number = 5;
  activePage: number = 0;
  ratingCounts: { [key: number]: number } = {};
  amountOfRatings: number = 0;
  rating: number = 0;
  weightedRatingSum: number = 0;
  reviewsServiceSubscription: any;
  @Output() ratingChanged = new EventEmitter<number>();
  emitRatingChange() {
    this.ratingChanged.emit(this.rating);
  }

  constructor(
    public dialog: MatDialog,
    private reviewsService: ReviewsService
  ) {}
  ngOnInit() {
    this.reviewsService.getReviews();
    this.reviewsServiceSubscription = this.reviewsService.reviews$.subscribe(
      (review) => {
        this.reviews = review;
        this.paginatedReviews = this.reviews.slice(0, this.itemsPerPage);
        this.amountOfRatings = this.reviews.length;

        this.ratings.forEach((rating) => {
          this.ratingCounts[rating] = this.reviews.filter(
            (review) => Math.round(review.rating) === rating
          ).length;
          this.weightedRatingSum += rating * this.ratingCounts[rating];
        });

        if (this.amountOfRatings > 0) {
          this.rating = this.weightedRatingSum / this.amountOfRatings;
          this.emitRatingChange();
        }
      }
    );
  }

  onPageChange(paginatedReviews: any[]) {
    this.paginatedReviews = paginatedReviews;
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReviewModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy(): void {
    this.reviewsServiceSubscription &&
      this.reviewsServiceSubscription.unsubscribe();
  }
}
