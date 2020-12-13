import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrasladoPageRoutingModule } from './traslado-routing.module';

import { TrasladoPage } from './traslado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrasladoPageRoutingModule
  ],
  declarations: [TrasladoPage]
})
export class TrasladoPageModule {}
