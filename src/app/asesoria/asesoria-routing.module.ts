import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsesoriaPage } from './asesoria.page';

const routes: Routes = [
  {
    path: '',
    component: AsesoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsesoriaPageRoutingModule {}
