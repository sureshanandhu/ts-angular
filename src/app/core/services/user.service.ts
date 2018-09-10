import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service'
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    private apiService: ApiService

  ) { }


 /**
  * 
  * @param user
  */
  create(user: User) {
    /*register api not working. so used users api*/
    //return this.apiService.post('register', { email: user.email, password: user.password });
    return this.apiService.post('users', { name: user.email, job: user.password });
  }
  
}
