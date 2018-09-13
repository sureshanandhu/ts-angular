import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AlertComponent } from './shared/alert';
import { LoginComponent } from './modules/login/login.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { ApiService } from './core/services/api.service';
import { AuthenticationService } from './core/authentication/authentication.service';
import { AuthenticationGuard } from './core/guards/authentication-guard';
import { AlertService } from './core/services/alert.service';
import { UserService } from './core/services/user.service';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginLayoutComponent } from './shared/layout/login-layout';
import { HomeLayoutComponent } from './shared/layout/home-layout';


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
    LoginLayoutComponent
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
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
