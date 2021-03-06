import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarconsignacionPageRoutingModule } from './confirmarconsignacion-routing.module';

import { ConfirmarconsignacionPage } from './confirmarconsignacion.page';
import { ImagenComponent } from '../imagen/imagen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarconsignacionPageRoutingModule
  ],
  declarations: [ConfirmarconsignacionPage, ImagenComponent]
})
export class ConfirmarconsignacionPageModule {}
