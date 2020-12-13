import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecaudosPage } from './recaudos.page';

const routes: Routes = [
  {
    path: '',
    component: RecaudosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecaudosPageRoutingModule {}
