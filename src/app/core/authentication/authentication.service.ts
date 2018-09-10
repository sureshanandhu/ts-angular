import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../core/services/api.service'
import { User } from '../models/user.model'
  
@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient,
    private apiService: ApiService
  ) { }

  
  login(user: User) {
    return this.apiService.post('login', { email: user.email, password: user.password })
            .pipe(map(user => {
                // login successful if there's a token in the response
                if (user && user.token) {
                 
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
         
    }
}
