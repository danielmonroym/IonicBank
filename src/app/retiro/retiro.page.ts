import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';
import jwt_decode   from 'jwt-decode';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.page.html',
  styleUrls: ['./retiro.page.scss'],
})
export class RetiroPage implements OnInit {
  tokenValidation: any;
  decodedToken:any;
  input1:any;
  input2:any;
  input3:number=0;
  input4:any;
  selectedValue:any;
  montoDisabled:boolean;
  showBadge:boolean;
  constructor(private tokenService:TokenService, public router:Router, public dataService:DataService) { }

  ngOnInit() {
    this.tokenValidation=this.tokenService.getToken();
    this.decodedToken= jwt_decode(this.tokenValidation);
    console.log(this.decodedToken);
    this.input1=this.decodedToken.ownerName;
    console.log(this.input1);
    this.input2=this.decodedToken.ownerId;
    this.input4=this.decodedToken.ownerAccounts;
    console.log(this.selectedValue);
    if(this.selectedValue==undefined){
      this.montoDisabled=true;
    }
    
  

  }

  changeSelected():void{
   this.montoDisabled=false;
   console.log(this.selectedValue)
  }

  verificarMonto():void{
   if(this.input3>=this.selectedValue || this.input3>=this.decodedToken.maxTransferAmount){
       this.showBadge=true;
   }else{ 
    this.showBadge=false;
   }

  }

  getQRData(){
    let dataObject= {
      qrData1: this.input1,
      qrData2: this.input2,
      qrData3: this.input3,
      qrData4: this.selectedValue
    }
   this.dataService.setParamData(dataObject);
   this.router.navigateByUrl('confirmar')
 }
}
