import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReviewsService } from 'src/app/Services/reviews.service';
import { ClickEvent } from 'angular-star-rating';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.scss'],
})
export class ReviewModalComponent {
  constructor(
    public dialog: MatDialog,
    private reviewsService: ReviewsService,
    public dialogRef: MatDialogRef<ReviewModalComponent>
  ) {}
  ratingValue: number = 0;
  reviewText: string = '';
  onClickResult: ClickEvent | undefined;
  postId: number = 60;

  onClick = ($event: ClickEvent) => {
    this.onClickResult = $event;
    this.ratingValue = this.onClickResult.rating;
    console.log(this.ratingValue);
  };
  submitReview() {
    const newReview = {
      rating: this.ratingValue,
      body: this.reviewText,
      userId: localStorage.getItem('userId'),
      postId: this.postId,
    };

    console.log(newReview);

    this.reviewsService.addReview(newReview).subscribe((response) => {
      this.reviewsService.updateReviews(response);
      console.log(response);

      this.dialogRef.close();
    });
  }
}
