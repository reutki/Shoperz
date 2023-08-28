import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './Services/authGuard.service';
import { AuthService } from './Services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Shoperz';
  constructor(private authGuard: AuthGuard, private authService: AuthService) {}
  ngOnInit() {
    this.authGuard.checkLoginAndNavigate();
  }
}
