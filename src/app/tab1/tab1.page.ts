import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {

 tokenValidation:any;
 

  
  constructor(private tokenService: TokenService, public router:Router) {
     
  }
  ngOnInit() {
   this.tokenValidation=this.tokenService.getToken();
   console.log(this.tokenValidation)
   if(this.tokenValidation==undefined){
     this.router.navigate(["/"])
   }
  }
  
  
 
}

