import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';

import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    IndexPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule

  ],
  declarations: [IndexPage ]
})
export class IndexPageModule {}
