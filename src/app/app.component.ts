import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './Services/authGuard.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Shoperz';
  constructor(private authGuard: AuthGuard) {}
  ngOnInit() {
    this.authGuard.checkLoginAndNavigate();
  }
}
