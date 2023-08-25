import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.api.request('POST', 'auth/login', loginData);
  }

  //stores the token in the localStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    console.log('Token saved:', token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('authToken');
    console.log('Token retrieved:', token);
    return token;
  }

  //if the token is not anymore he same, it will log out
  isLoggedIn(): boolean {
    console.log(!!this.getToken());

    return !!this.getToken();
  }
  //removes the token from local storage
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
