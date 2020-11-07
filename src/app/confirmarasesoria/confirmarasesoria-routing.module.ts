import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarasesoriaPage } from './confirmarasesoria.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarasesoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarasesoriaPageRoutingModule {}
