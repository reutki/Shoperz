import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarRatingModule } from 'angular-star-rating';
import { GalleryModule } from 'ng-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { ShopFeaturesComponent } from './components/shop-features/shop-features.component';
import { SideNavMenuComponent } from './components/side-nav-menu/side-nav-menu.component';
import { CategoriesNavBarComponent } from './components/categories-nav-bar/categories-nav-bar.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { ProductCardV1Component } from './components/product-card-v1/product-card-v1.component';
import { BundleCardComponent } from './components/bundle-card/bundle-card.component';
import { ProductCardV2Component } from './components/product-card-v2/product-card-v2.component';
import { RatingCardComponent } from './components/rating-card/rating-card.component';
import { ProductCardListViewV1Component } from './components/product-card-list-view-v1/product-card-list-view-v1.component';
import { FilterSectionPricesComponent } from './components/filter-section-prices/filter-section-prices.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TabsProductComponent } from './components/tabs-product/tabs-product.component';
import { ClientReviewComponent } from './components/client-review/client-review.component';
import { ReviewModalComponent } from './components/review-modal/review-modal.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AppwrapperComponent } from './components/appwrapper/appwrapper.component';
import { OffersSectionComponent } from './components/offers-section/offers-section.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { AdminUserFormComponent } from './components/admin-user-form/admin-user-form.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AdminProductsViewComponent } from './components/admin-products-view/admin-products-view.component';

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
    CategoryComponent,
    CartItemComponent,
    AppwrapperComponent,
    OffersSectionComponent,
    ProductPageComponent,
    AdminComponent,
    AdminMenuComponent,
    AdminProductFormComponent,
    AdminUserFormComponent,
    ProfilePageComponent,
    AdminProductsViewComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    StarRatingModule.forRoot(),
    GalleryModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
