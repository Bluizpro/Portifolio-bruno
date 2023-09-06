import { RouterModule, Routes } from "@angular/router";
import { ContatosComponent } from "./contatos.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{
    path: '', component: ContatosComponent,
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  
})
export class ContatosRoutingModule { }