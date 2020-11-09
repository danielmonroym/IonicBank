import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';
import { ImagenComponent } from '../imagen/imagen.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IndexPageRoutingModule,
    ReactiveFormsModule,

  ],
  declarations: [IndexPage, ImagenComponent ]
})
export class IndexPageModule {}
