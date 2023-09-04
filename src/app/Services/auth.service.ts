import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  adminSubject = new BehaviorSubject<boolean>(false);
  admin$ = this.adminSubject.asObservable();
  constructor(private api: ApiService) {}

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    username === 'kminchelle' &&
      localStorage.setItem('admins', JSON.stringify(['kminchelle']));
    localStorage.setItem('username', username);

    this.isAdmin(username)
      ? this.adminSubject.next(true)
      : this.adminSubject.next(false);
    return this.api.request('POST', 'auth/login', loginData);
  }

  //stores the token in the localStorage
  saveToken(token: string, userId: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
  }

  getToken(): string | null {
    const token = localStorage.getItem('authToken');

    return token;
  }
  isAdmin(username: string): boolean {
    const admins = localStorage.getItem('admins');

    if (admins === null) {
      return false; // No admins in localStorage
    }
    this.adminSubject.next(admins.includes(username));
    return this.adminSubject.value;
  }

  //if the token is not anymore he same, it will log out
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  //removes the token from local storage
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
