import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarasesoriaPageRoutingModule } from './confirmarasesoria-routing.module';

import { ConfirmarasesoriaPage } from './confirmarasesoria.page';
import { ImagenComponent } from '../imagen/imagen.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarasesoriaPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [ConfirmarasesoriaPage, ImagenComponent]
})
export class ConfirmarasesoriaPageModule {}
