import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarretiroPageRoutingModule } from './confirmarretiro-routing.module';

import { ConfirmarretiroPage } from './confirmarretiro.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ImagenComponent } from '../imagen/imagen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarretiroPageRoutingModule,
    NgxQRCodeModule 
  ],
  declarations: [ConfirmarretiroPage, ImagenComponent]
})
export class ConfirmarretiroPageModule {}
