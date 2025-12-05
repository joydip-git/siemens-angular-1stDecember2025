import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiResponse } from '../../models/api-response';
import { AUTH_API_URL } from '../../config/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly _http: HttpClient) {

  }
  //after successful registration, the RESTful API application will return the same registered user object as response
  register(user: User) {
    return this._http.post<ApiResponse<User>>(`${AUTH_API_URL}/register`, user);
  }
  //after successful authentication, the RESTful API application will return a JSON Web Token (string) as response
  login(user: User) {
    return this._http.post<ApiResponse<string>>(`${AUTH_API_URL}/login`, user);
  }
}
