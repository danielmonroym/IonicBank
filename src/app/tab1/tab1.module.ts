import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ImagenComponent } from '../imagen/imagen.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, ImagenComponent]
})
export class Tab1PageModule {}
