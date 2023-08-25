import { Component } from '@angular/core';
import { AuthGuard } from './Services/authGuard.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Shoperz';

  constructor(private authGuard: AuthGuard) {
    this.authGuard.checkLoginAndNavigate();
  }
}
