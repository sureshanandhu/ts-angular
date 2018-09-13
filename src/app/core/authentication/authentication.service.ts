import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../core/services/api.service'
import { User } from '../models/user.model'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(user: User) {
    return this.apiService.post('login', { email: user.email, password: user.password })
      .pipe(map(user => {
        // login successful if there's a token in the response              
        if (user && user.token) {
          //set api user token to local storage
          localStorage.setItem('apiUserToken', user.token);
          this.loggedIn.next(true);
        }
        return user;
      }));
  }

  logout() {
    this.loggedIn.next(false);
    // remove api user token from local storage
    localStorage.removeItem('apiUserToken');
    this.router.navigate(['/login']);
  }
}
