import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsignacionPageRoutingModule } from './consignacion-routing.module';

import { ConsignacionPage } from './consignacion.page';
import { ComponentsModule } from '../components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsignacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConsignacionPage]
})
export class ConsignacionPageModule {}
