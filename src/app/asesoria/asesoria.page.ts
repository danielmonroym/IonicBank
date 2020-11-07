import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-asesoria',
  templateUrl: './asesoria.page.html',
  styleUrls: ['./asesoria.page.scss'],
})
export class AsesoriaPage implements OnInit {
  
  qrData1:string= "prueba";
  qrData2:string= "prueba2";
  qrData3:string= "prueba3";
  qrData4:string= "prueba4";
  constructor( public router:Router, public dataService:DataService) { 

  }

  ngOnInit() {
  }
   
  getQRData(){
     let dataObject= {
       qrData: this.qrData1,
       qrData2: this.qrData2,
       qrData3: this.qrData3,
       qrData4: this.qrData4
     }
    this.dataService.setParamData(dataObject);
    this.router.navigateByUrl('confirmarasesoria')
  }

}
