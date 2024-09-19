import { Injectable } from '@angular/core';
import { LoginUser } from '../interfaces/Login';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../interfaces/SignUp';

const API_login="https://localhost:7052/api/Auth/Login";
const API_signup="https://localhost:7052/api/Auth/SignUp";
@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  constructor(private http:HttpClient) { }

   checkLogin(payload:LoginUser){
      return this.http.post<any>(API_login,payload)
   }

   registeruser(payload:Signup){
    return this.http.post<any>(API_signup,payload)
   }
}
