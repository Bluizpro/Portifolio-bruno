import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortifolioComponent } from './portifolio.component';
import { PortifolioRoutingModule } from './portifolio-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PortifolioComponent
  ],
  imports: [
    CommonModule,
    PortifolioRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class PortifolioModule { }
