import { NgModule } from '@angular/core';
import { AuthGuard } from './Services/authGuard.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { CategoryComponent } from './components/category/category.component';
import { AppwrapperComponent } from './components/appwrapper/appwrapper.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminUserFormComponent } from './components/admin-user-form/admin-user-form.component';
import { AdminProductFormComponent } from './components/admin-product-form/admin-product-form.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AdminProductsViewComponent } from './components/admin-products-view/admin-products-view.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  {
    path: '',
    component: AppwrapperComponent,
    children: [
      {
        path: 'landing',
        component: CategoryComponent,
        outlet: 'categories',
      },
      {
        path: 'category/:categoryName',
        component: CategoryComponent,
        outlet: 'categories',
      },
      {
        path: 'product/:id',
        component: ProductPageComponent,
        outlet: 'categories',
      },
      {
        path: 'admin',
        component: AdminComponent,
        outlet: 'categories',
        children: [
          {
            path: 'addUser',
            component: AdminUserFormComponent,
            outlet: 'admin',
          },
          {
            path: 'addProduct',
            component: AdminProductFormComponent,
            outlet: 'admin',
          },
          {
            path: 'showProducts',
            component: AdminProductsViewComponent,
            outlet: 'admin',
          },

          {
            path: '',
            component: AppwrapperComponent,
          },
        ],
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
        outlet: 'categories',
      },
      {
        path: '',
        component: AppwrapperComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
