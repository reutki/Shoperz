import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { ShopFeaturesComponent } from './components/shop-features/shop-features.component';

import { MatCardModule } from '@angular/material/card';
//material imports
import { MatTabsModule } from '@angular/material/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
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
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { ProductCardV1Component } from './components/product-card-v1/product-card-v1.component';
import { BundleCardComponent } from './components/bundle-card/bundle-card.component';
import { ProductCardV2Component } from './components/product-card-v2/product-card-v2.component';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { StarRatingModule } from 'angular-star-rating';
import { ProductCardListViewV1Component } from './components/product-card-list-view-v1/product-card-list-view-v1.component';
import { FilterSectionPricesComponent } from './components/filter-section-prices/filter-section-prices.component';
import { MatSliderModule } from '@angular/material/slider';
import { PaginationComponent } from './components/pagination/pagination.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryModule } from 'ng-gallery';
import { TabsProductComponent } from './components/tabs-product/tabs-product.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ClientReviewComponent } from './components/client-review/client-review.component';
import { ReviewModalComponent } from './components/review-modal/review-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CartComponent } from './components/cart/cart.component';
import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryComponent } from './components/category/category.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

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
    RegisterScreenComponent,
    ProductCardV1Component,
    BundleCardComponent,
    ProductCardV2Component,
    RatingCardComponent,
    ProductCardListViewV1Component,
    FilterSectionPricesComponent,
    PaginationComponent,
    GalleryComponent,
    TabsProductComponent,
    ClientReviewComponent,
    ReviewModalComponent,
    CartComponent,
    AppWrapperComponent,
    CategoryComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
    MatSliderModule,
    StarRatingModule.forRoot(),
    MatPaginatorModule,
    MatTabsModule,
    NgxPaginationModule,
    GalleryModule,
    MatProgressBarModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
