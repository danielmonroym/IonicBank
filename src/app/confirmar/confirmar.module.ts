import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfirmarPageRoutingModule } from './confirmar-routing.module';
import { ConfirmarPage } from './confirmar.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ComponentsModule } from '../components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarPageRoutingModule,
    NgxQRCodeModule,
    ComponentsModule
  ],
  declarations: [ConfirmarPage]
})
export class ConfirmarPageModule {}
