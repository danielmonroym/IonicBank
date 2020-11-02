import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsignacionPage } from './consignacion.page';

const routes: Routes = [
  {
    path: '',
    component: ConsignacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsignacionPageRoutingModule {}
