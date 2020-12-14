import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarrecaudoPageRoutingModule } from './confirmarrecaudo-routing.module';

import { ConfirmarrecaudoPage } from './confirmarrecaudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarrecaudoPageRoutingModule
  ],
  declarations: [ConfirmarrecaudoPage]
})
export class ConfirmarrecaudoPageModule {}
