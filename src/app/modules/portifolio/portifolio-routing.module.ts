import { RouterModule, Routes } from "@angular/router";
import { PortifolioComponent } from "./portifolio.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{
    path: '', component: PortifolioComponent,
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  
})
export class PortifolioRoutingModule { }