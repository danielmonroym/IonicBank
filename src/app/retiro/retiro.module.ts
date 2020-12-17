import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetiroPageRoutingModule } from './retiro-routing.module';

import { RetiroPage } from './retiro.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetiroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RetiroPage]
})
export class RetiroPageModule {}
