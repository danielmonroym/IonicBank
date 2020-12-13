import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import jwt_decode   from 'jwt-decode';
import { TokenService } from '../services/token.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage{

  
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required, '', Validators.minLength(6)]
  });

  
  constructor(private formBuilder: FormBuilder, private loginService:LoginService, public router:Router, private tokenService: TokenService) {}
  
  inputUser:any;
  inputPassword:any;
  spinner:boolean=false;
  errors:any;
  throwError:boolean=false;
  decodedToken:any;
  token:any;
  public submit(){
    
    if(this.validateUser(this.username.value, this.password.value)){
      console.log("Bienvenido")
    }else{
      console.log("Nombre de usuario/contraseña incorrecto/a");
      this.username.setValue(" ");
    }
  }

  get username(){
    return this.loginForm.get("username");
  }

  get password(){
    return this.loginForm.get("password");
  }

  public errorMessages = {
    username:[
      {type: 'required', message: 'El nombre de usuario es requerido'}
    ],
    password:[
      {type: 'required', message: 'La clave del cajero es requerida'},
      {type: 'pattern', message: 'Ingrese un numero de clave valido'},
      {type: 'minLength', message: 'La clave de cajero debe tener minimo 3 digitos'}
    ]
  };

  public validateUser(u, p){
    if(u === "mateo" && p === "123"){
      return true;
    }else{
      return false;
    }
  };

  login(){
    this.loginService.getUser().subscribe((data) => {
      console.log(data);
    });

 

}

login2(){
  this.spinner=true;
  this.loginService.login(this.inputUser,this.inputPassword).subscribe((data) => {
   this.token= data.data.token;
   this.tokenService.setToken(this.token);
   console.log(this.tokenService.getToken());
   this.router.navigate(['/tabs']);
 },
 error => {
   this.throwError=true;
  console.log(error);
  this.errors = error;
}
 );

 
}
}
