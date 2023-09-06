import { NgModule } from "@angular/core";
import { ContatosComponent } from "./contatos.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { ContatosRoutingModule } from "./contatos-routing.module";

@NgModule({
    declarations: [
      ContatosComponent
 
  
    ],
    imports:[
        CommonModule,
      ContatosRoutingModule,
        SharedModule,
        RouterModule
       
       
    
      ],
    })
    export class ContatosModule {}
    