import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsesoriaPageRoutingModule } from './asesoria-routing.module';

import { AsesoriaPage } from './asesoria.page';
import { ImagenComponent } from '../imagen/imagen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsesoriaPageRoutingModule
  ],
  declarations: [AsesoriaPage, ImagenComponent]
})
export class AsesoriaPageModule {}
