import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsignacionPageRoutingModule } from './consignacion-routing.module';

import { ConsignacionPage } from './consignacion.page';
import { ImagenComponent } from '../imagen/imagen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsignacionPageRoutingModule
  ],
  declarations: [ConsignacionPage,ImagenComponent]
})
export class ConsignacionPageModule {}
