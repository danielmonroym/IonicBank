import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular'

import { FormsModule } from '@angular/forms';

import { ImagenComponent } from './imagen/imagen.component';
@NgModule({imports:[FormsModule,  
                    CommonModule,
                    IonicModule], 
           declarations: [
            ImagenComponent], 
           exports: [ImagenComponent]
         })
            

export class ComponentsModule {}

