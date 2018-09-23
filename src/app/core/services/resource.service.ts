import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service'
import { Resource } from '../models/resource.model';

@Injectable()
export class ResourceService {
  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

 /**
  * 
  */
  getResourceList() {
    return this.apiService.get('unknown');    
  }
  
}
