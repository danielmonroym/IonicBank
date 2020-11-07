import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-confirmarasesoria',
  templateUrl: './confirmarasesoria.page.html',
  styleUrls: ['./confirmarasesoria.page.scss'],
})
export class ConfirmarasesoriaPage implements OnInit {
  createdCode = null;
  scannedCode = null;
  paramData=null;
  qrResult;
  constructor(public router:Router, public activatedRoute:ActivatedRoute,
    public dataService:DataService) { 
      
    }

  ngOnInit() {

    this.paramData=this.dataService.getParamData();

    console.log(this.paramData);
   this.qrResult= JSON.stringify(this.paramData);
    console.log(this.qrResult);
    
    console.log(this.createdCode);
    let vuelta= JSON.parse(this.qrResult);
    console.log(vuelta);
  }

  
}
