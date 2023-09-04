import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appwrapper',
  templateUrl: './appwrapper.component.html',
  styleUrls: ['./appwrapper.component.scss'],
})
export class AppwrapperComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['', { outlets: { categories: ['landing'] } }]);
  }
}
