import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrasladoPage } from './traslado.page';

const routes: Routes = [
  {
    path: '',
    component: TrasladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrasladoPageRoutingModule {}
