import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { LoginRequest } from '../models/LoginRequest';
import { RegisterRequest } from '../models/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 apiUrl= environment.apiUrl
 controller = "";

  constructor(private http:HttpClient) {
    this.controller="Account"
   }

  login(data:LoginRequest){
   return this.http.post(`${this.apiUrl}/${this.controller}/Login`,data)
  }

  register(data:RegisterRequest){
    return this.http.post(`${this.apiUrl}/${this.controller}/Register`,data)
  }
}
