import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './modules/sign-up/sign-up.component';

import { AuthenticationService } from './core/authentication/authentication.service';
import { AuthenticationGuard } from './core/guards/authentication-guard';
import { LoginComponent } from './modules/login/login.component';
import { LoginLayoutComponent } from './shared/layout/login-layout';
import { HomeComponent } from './modules/home/home.component';
import { HomeLayoutComponent } from './shared/layout/home-layout';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  { path: 'signup', component: SignUpComponent },
  
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
