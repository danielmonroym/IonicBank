import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmartrasladoPageRoutingModule } from './confirmartraslado-routing.module';

import { ConfirmartrasladoPage } from './confirmartraslado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmartrasladoPageRoutingModule
  ],
  declarations: [ConfirmartrasladoPage]
})
export class ConfirmartrasladoPageModule {}
