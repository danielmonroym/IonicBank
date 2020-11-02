import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'consignacion',
    loadChildren: () => import('./consignacion/consignacion.module').then( m => m.ConsignacionPageModule)
  },
  {
    path: 'confirmarconsignacion',
    loadChildren: () => import('./confirmarconsignacion/confirmarconsignacion.module').then( m => m.ConfirmarconsignacionPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
