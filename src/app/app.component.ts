import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './Services/authGuard.service';
import { AuthService } from './Services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Shoperz';
  logged = false;

  constructor(private authGuard: AuthGuard, private authService: AuthService) {
    this.authGuard.checkLoginAndNavigate();
  }
  ngOnInit() {
    this.logged = this.authService.isLoggedIn();
  }
}
