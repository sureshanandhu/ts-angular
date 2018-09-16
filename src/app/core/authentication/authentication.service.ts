import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../core/services/api.service'
import { User } from '../models/user.model'
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) { }

  login(user: User) {
    return this.apiService.post('login', { email: user.email, password: user.password })
      .pipe(map(res => {
        // login successful if there's a token in the response              
        if (res && res.token) {
          //set api user token & user email to local storage
          localStorage.setItem('apiUserToken', res.token);
          localStorage.setItem('loginEmail', user.email);
        }
        return user;
      }));
  }

  logout() {
    // remove api user token from local storage
    localStorage.removeItem('apiUserToken');
    localStorage.removeItem('loginEmail');
    this.router.navigate(['/login']);
  }
}
