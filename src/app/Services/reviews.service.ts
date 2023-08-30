import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private api: ApiService) {}

  private commentsSubject = new BehaviorSubject<any[]>([]);
  comments$: Observable<any[]> = this.commentsSubject.asObservable();

  private reviewsSubject = new BehaviorSubject<any[]>([]);
  reviews$: Observable<any[]> = this.reviewsSubject.asObservable();

  private generateRandomRating(): number {
    return Math.random() * 5;
  }
  getReviews() {
    this.api.request('GET', `comments`).subscribe((response: any) => {
      const comments = response.comments.map((comment: any) => {
        const randomRating = this.generateRandomRating();
        comment.rating = randomRating;
        return comment;
      });

      this.commentsSubject.next(comments);
      this.reviewsSubject.next([...comments]);
      console.log( comments);
    });
  }
  addReview(newReview:any):Observable<any>{


    return this.api.request('POST', `comments/add`, newReview);

  }
  updateReviews(newReview:any):void{
    const updatedReviews = [newReview,...this.commentsSubject.value];

    this.commentsSubject.next(updatedReviews);
    this.reviewsSubject.next([...updatedReviews]);
    console.log(this.commentsSubject);


  }


}
