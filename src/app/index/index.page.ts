import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
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

  
  constructor(private formBuilder: FormBuilder, private loginService:LoginService, public router:Router) {}
  
  inputUser:any;
  inputPassword:any;
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
  this.loginService.login(this.inputUser,this.inputPassword).subscribe((data) => {
   console.log(data);
   this.router.navigateByUrl('tabs');
 });

 
}
}
