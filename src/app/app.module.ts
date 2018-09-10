import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './shared/alert';
import { LoginComponent } from './modules/login/login.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { ApiService } from './core/services/api.service';
import { AuthenticationService } from './core/authentication/authentication.service';
import { AlertService } from './core/services/alert.service';
import { UserService } from './core/services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    SignUpComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthenticationService,
    ApiService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
