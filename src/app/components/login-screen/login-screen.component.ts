import { AuthGuard } from './../../Services/authGuard.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private authGuard: AuthGuard) {}

  login(): void {
    this.authService
      .login(this.username, this.password)
      .subscribe((response) => {
        console.log(response);
        if (response.token) {
          this.authService.saveToken(response.token);
          this.authGuard.checkLoginAndNavigate();
        }
      });
  }
}
