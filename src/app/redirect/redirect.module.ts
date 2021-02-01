import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedirectPageRoutingModule } from './redirect-routing.module';

import { RedirectPage } from './redirect.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedirectPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RedirectPage]
})
export class RedirectPageModule {}
