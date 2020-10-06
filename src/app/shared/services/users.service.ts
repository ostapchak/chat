import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
 
@Injectable()
export class UsersService {
 
    constructor(private http: HttpClient){
 
    }
     
    getUser(user){
      return this.http.post('/api/user/login',user)
    }

    createUser(user: User) {
      return this.http.post('/api/user/registration',user)
    }
 
}