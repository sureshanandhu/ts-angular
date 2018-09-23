import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AlertComponent } from './shared/alert';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ApiService } from './core/services/api.service';
import { AuthenticationService } from './core/authentication/authentication.service';
import { AuthenticationGuard } from './core/guards/authentication-guard';
import { AlertService } from './core/services/alert.service';
import { UserService } from './core/services/user.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginLayoutComponent } from './shared/layout/login-layout';
import { HomeLayoutComponent } from './shared/layout/home-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResourceComponent } from './resource/resource.component';
import { UserComponent } from './user/user.component';
import { ResourceService } from 'src/app/core/services/resource.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    PageNotFoundComponent,
    ResourceComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    ApiService,
    AlertService,
    UserService,
    ResourceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
