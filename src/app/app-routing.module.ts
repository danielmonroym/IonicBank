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
  {
    path: 'asesoria',
    loadChildren: () => import('./asesoria/asesoria.module').then( m => m.AsesoriaPageModule)
  },
  {
    path: 'confirmarasesoria',
    loadChildren: () => import('./confirmarasesoria/confirmarasesoria.module').then( m => m.ConfirmarasesoriaPageModule)
  },
  {
    path: 'retiro',
    loadChildren: () => import('./retiro/retiro.module').then( m => m.RetiroPageModule)
  },
  {
    path: 'recaudos',
    loadChildren: () => import('./recaudos/recaudos.module').then( m => m.RecaudosPageModule)
  },
  {
    path: 'traslado',
    loadChildren: () => import('./traslado/traslado.module').then( m => m.TrasladoPageModule)
  },
  {
    path: 'confirmarretiro',
    loadChildren: () => import('./confirmarretiro/confirmarretiro.module').then( m => m.ConfirmarretiroPageModule)
  },
  {
    path: 'confirmartraslado',
    loadChildren: () => import('./confirmartraslado/confirmartraslado.module').then( m => m.ConfirmartrasladoPageModule)
  },
  {
    path: 'confirmarrecaudo',
    loadChildren: () => import('./confirmarrecaudo/confirmarrecaudo.module').then( m => m.ConfirmarrecaudoPageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
