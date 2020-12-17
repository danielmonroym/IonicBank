import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrasladoPageRoutingModule } from './traslado-routing.module';

import { TrasladoPage } from './traslado.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrasladoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TrasladoPage]
})
export class TrasladoPageModule {}
