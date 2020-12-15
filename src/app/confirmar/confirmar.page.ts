import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.page.html',
  styleUrls: ['./confirmar.page.scss'],
})
export class ConfirmarPage implements OnInit {
  createdCode = null;
  scannedCode = null;
  paramData=null;
  qrResult;

  constructor(public dataService:DataService) { }

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
