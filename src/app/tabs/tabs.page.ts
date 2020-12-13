import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage  implements OnInit{
  tokenValidation: any;

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
