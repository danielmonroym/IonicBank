import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarretiroPage } from './confirmarretiro.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarretiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarretiroPageRoutingModule {}
