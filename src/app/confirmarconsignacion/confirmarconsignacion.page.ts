import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-confirmarconsignacion',
  templateUrl: './confirmarconsignacion.page.html',
  styleUrls: ['./confirmarconsignacion.page.scss'],
})
export class ConfirmarconsignacionPage implements OnInit {
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
