import { NgModule } from '@angular/core';
import { AuthGuard } from './Services/authGuard.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { CategoryComponent } from './components/category/category.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'category/:categoryName', component: CategoryComponent },
  { path: '', pathMatch: 'full', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
