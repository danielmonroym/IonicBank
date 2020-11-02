import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarconsignacionPage } from './confirmarconsignacion.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarconsignacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarconsignacionPageRoutingModule {}
