import { RouterModule, Routes } from "@angular/router";
import { SobreComponent } from "./sobre.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{
        path:'', component: SobreComponent,
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  

})
export class SobreRoutingModule { }