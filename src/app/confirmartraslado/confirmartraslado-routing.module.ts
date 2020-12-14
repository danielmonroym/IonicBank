import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmartrasladoPage } from './confirmartraslado.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmartrasladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmartrasladoPageRoutingModule {}
