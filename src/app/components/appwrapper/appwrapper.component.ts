import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-appwrapper',
  templateUrl: './appwrapper.component.html',
  styleUrls: ['./appwrapper.component.scss'],
})
export class AppwrapperComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isAdmin(localStorage.getItem('username') || '');
    console.log(
      this.authService.isAdmin(localStorage.getItem('username') || '')
    );

    this.router.navigate(['', { outlets: { categories: ['landing'] } }]);
  }
}
