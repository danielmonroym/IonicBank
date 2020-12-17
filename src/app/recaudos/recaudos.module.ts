import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecaudosPageRoutingModule } from './recaudos-routing.module';

import { RecaudosPage } from './recaudos.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecaudosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecaudosPage]
})
export class RecaudosPageModule {}
