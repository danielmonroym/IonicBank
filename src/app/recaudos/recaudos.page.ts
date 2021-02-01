import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { TokenService } from '../services/token.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-recaudos',
  templateUrl: './recaudos.page.html',
  styleUrls: ['./recaudos.page.scss'],
})
export class RecaudosPage implements OnInit {
  tokenValidation: any;
  decodedToken: any;
  input1: any; //Codigo convenio
  input2: any; //Codigo factura
  input3: any; //Nombre titular
  input4: any; //Documento
  input5: any; //Monto
  input6: any; //Cuentas del titular
  selectedPaymentValue: any; //Tipo de pago seleccionado
  selectedAccountValue: any; //Tipo de cuenta seleccionada
  showBadge: boolean;
  montoDisabled: boolean;
  activateAccountSelector: boolean;
  limitMoneyAmmount = 3000000;

  constructor(private tokenService: TokenService, public router: Router, public dataService: DataService) { }

  ngOnInit() {
    if (this.tokenService.getToken() != undefined) {
      this.tokenValidation = this.tokenService.getToken();
      this.decodedToken = jwt_decode(this.tokenValidation);
      this.input3 = this.decodedToken.ownerName;
      this.input4 = this.decodedToken.ownerId;
      this.input6 = this.decodedToken.ownerAccounts;
      if (this.selectedPaymentValue == undefined) {
        this.montoDisabled = true;
        this.activateAccountSelector = false;
      }
    } else {
      this.router.navigateByUrl('index')
    }
  }

  verifyBalance(): void {
    if (this.activateAccountSelector) {
      if (this.input5 >= this.selectedPaymentValue || this.input5 >= this.decodedToken.maxTransferAmount) {
        this.showBadge = true;
      } else {
        this.showBadge = false;
      }
    } else if (this.input5 >= this.limitMoneyAmmount) {
      this.showBadge = true;
    } else {
      this.showBadge = false;
    }
  }

  changeSelected(): void {
    this.montoDisabled = false;
    if (this.selectedPaymentValue === "Tarjeta") {
      this.activateAccountSelector = true;
      console.log(this.selectedPaymentValue);
    } else {
      this.activateAccountSelector = false;
    }

  }

  getQRData() {
    let dataObject = {};
    if (this.activateAccountSelector) {
      dataObject = {
        qrData1: this.input1,
        qrData2: this.input2,
        qrData3: this.input3,
        qrData4: this.input4,
        qrData5: this.selectedPaymentValue.accountType,
        qrData6: this.selectedAccountValue,
        qrData7: this.input5
      }

    } else {
      dataObject = {
        qrData1: this.input1,
        qrData2: this.input2,
        qrData3: this.input3,
        qrData4: this.input4,
        qrData5: this.selectedPaymentValue,
        qrData6: this.input5
      }
    }
    console.log(dataObject);
    this.dataService.setParamData(dataObject);
    this.router.navigateByUrl('redirect')
  }

}
