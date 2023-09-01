import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  request<T>(method: string, endpoint: string, body?: any): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    switch (method.toUpperCase()) {
      case 'GET':
        return this.http
          .get<T>(url, { headers })
          .pipe(catchError(this.handleError));
      case 'POST':
        return this.http
          .post<T>(url, body, { headers })
          .pipe(catchError(this.handleError));
      case 'PUT':
        return this.http
          .put<T>(url, body, { headers })
          .pipe(catchError(this.handleError));
      case 'DELETE':
        return this.http
          .delete<T>(url, { headers })
          .pipe(catchError(this.handleError));
      default:
        return throwError(`Invalid request method: ${method}`);
    }
  }
}
