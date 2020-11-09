import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from "../modelo/login";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url='http://localhost:3001/api/';

  constructor(private http:HttpClient) { 

  
  }

  login(userName:Login, password:Login){
    const data ={
      userName,
      password
    }
    return this.http.post<Login>(this.url + "user/login", data);
   }

   getUser(){
    return this.http.get<Login>(this.url + "user/getAll");
   }
}
