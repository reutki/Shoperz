import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';

// import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
// import {MatIconModule} from '@angular/material/icon';
import { ShopFeaturesComponent } from './components/shop-features/shop-features.component';

//material imports
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavMenuComponent } from './components/side-nav-menu/side-nav-menu.component';
import { CategoriesNavBarComponent } from './components/categories-nav-bar/categories-nav-bar.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ShopFeaturesComponent,
    SideNavMenuComponent,
    CategoriesNavBarComponent,
    LoginScreenComponent,
    FooterComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSidenavModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
