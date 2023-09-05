import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { SideNavMenuComponent } from '../side-nav-menu/side-nav-menu.component';

@Component({
  selector: 'app-appwrapper',
  templateUrl: './appwrapper.component.html',
  styleUrls: ['./appwrapper.component.scss'],
})
export class AppwrapperComponent implements OnInit, AfterViewInit {
  constructor(private router: Router, private authService: AuthService) {}
  toggle: (() => void) = function x(){return}
  public isVisible:boolean=true

  @ViewChild(SideNavMenuComponent)
  private sideNav: SideNavMenuComponent | undefined;

  ngOnInit(): void {
    this.authService.isAdmin(localStorage.getItem('username') || '');
    console.log(this.authService.isAdmin(localStorage.getItem('username') || ''));

    this.router.navigate(['', { outlets: { categories: ['landing'] } }]);
  }


  ngAfterViewInit() {
    this.toggle = () => this.parentToggle();

  }

  parentToggle() {
    this.sideNav?.toggleDrawer();
  }
}
