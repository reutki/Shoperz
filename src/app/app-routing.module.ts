import { NgModule } from '@angular/core';
import { AuthGuard } from './Services/authGuard.service';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperComponent } from './components/app-wrapper/app-wrapper.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';

const routes: Routes = [
  { path: 'app', component: AppWrapperComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: '', redirectTo: '/app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
