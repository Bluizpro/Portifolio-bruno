import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
   // { path: 'planos', loadChildren: () => import('./planos/planos.module').then(m => m.PlanosModule) },
    { path: 'contatos', loadChildren: () => import('../contatos/contatos.module').then(m => m.ContatosModule) },
    { path: 'inicios', loadChildren: () => import ( '../dashboard/dashboard.module').then(m => m.DashboardModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }