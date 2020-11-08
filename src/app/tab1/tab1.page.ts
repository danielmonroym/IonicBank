import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required, Validators.pattern['0-9'], Validators.minLength(3)]
  });
  
  constructor(private formBuilder: FormBuilder) {}

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
  }

}
