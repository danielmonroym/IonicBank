import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private paramData: any
  constructor() { }


  setParamData(data){
   this.paramData=data;
  }

  getParamData(){
    return this.paramData;
  }
}
