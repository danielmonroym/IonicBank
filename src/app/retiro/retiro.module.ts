import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetiroPageRoutingModule } from './retiro-routing.module';

import { RetiroPage } from './retiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetiroPageRoutingModule
  ],
  declarations: [RetiroPage]
})
export class RetiroPageModule {}
