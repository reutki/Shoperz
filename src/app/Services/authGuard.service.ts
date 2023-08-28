// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router, private authService: AuthService) {}

  checkLoginAndNavigate() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
