import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './core/authentication/authentication.service';
import { AuthenticationGuard } from './core/guards/authentication-guard';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './shared/layout/login-layout';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './shared/layout/home-layout';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { ResourceComponent } from 'src/app/resource/resource.component';

const routes: Routes = [
  {//redirect to home when authentication guard returns true
    path: '',
    redirectTo: '/home', pathMatch:'full',
    canActivate: [AuthenticationGuard],
  },
  {//redirect to login
    path: '',
    redirectTo: '/login', pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'home',
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
    path: 'resource',
    component: HomeLayoutComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        component: ResourceComponent
      }
    ]
  }, 
  //wildcard route
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
