import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: 'dashboard',
  loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
},
{
  path: 'contatos',
  loadChildren: () =>
    import('./modules/contatos/contatos.module').then((m) => m.ContatosModule),
},
{
  path: 'portifolio',
  loadChildren: () =>
    import('./modules/portifolio/portifolio.module').then((m) => m.PortifolioModule),
},
{
  path: 'sobre',
  loadChildren: () =>
    import('./modules/sobre/sobre.module').then((m) => m.SobreModule),
},

{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
