import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule,
    SharedModule,
    RouterModule

  ]
})
export class SobreModule { }
