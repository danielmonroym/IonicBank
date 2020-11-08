import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarconsignacionPageRoutingModule } from './confirmarconsignacion-routing.module';

import { ConfirmarconsignacionPage } from './confirmarconsignacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarconsignacionPageRoutingModule
  ],
  declarations: [ConfirmarconsignacionPage]
})
export class ConfirmarconsignacionPageModule {}
