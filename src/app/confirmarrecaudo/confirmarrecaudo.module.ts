import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarrecaudoPageRoutingModule } from './confirmarrecaudo-routing.module';

import { ConfirmarrecaudoPage } from './confirmarrecaudo.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ImagenComponent } from '../imagen/imagen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarrecaudoPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [ConfirmarrecaudoPage, ImagenComponent]
})
export class ConfirmarrecaudoPageModule {}
