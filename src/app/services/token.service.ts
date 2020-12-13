import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: any;
  constructor() { }


  setToken(data){
    this.token=data;
   }
 
   getToken(){
     return this.token;
   }
 }

