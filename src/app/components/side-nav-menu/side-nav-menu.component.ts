import { AuthService } from 'src/app/Services/auth.service';
import { SearchService } from './../../Services/search.service';
import { CartService } from 'src/app/Services/cart.service';
import { Component, ViewChild,OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ApiService } from 'src/app/Services/api.service';
import { AppwrapperComponent } from '../appwrapper/appwrapper.component';


@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent implements OnInit {
  categories: any[] = [];

  constructor(private api: ApiService,
    public AppwrapperComponent:AppwrapperComponent,
    public cartService: CartService,
    public authService: AuthService

    ) {}
  @ViewChild('drawer') drawer?: MatDrawer;
  toggleDrawer() {
    this.AppwrapperComponent.isVisible=  !this.AppwrapperComponent.isVisible
    this.drawer?.toggle();
    console.log(this.AppwrapperComponent.isVisible);

  }
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.api.request('GET', 'products/categories').subscribe(
      (response: any) => {

          this.categories = response;
        },
      (error: any) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
}
