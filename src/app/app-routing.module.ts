import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BraavosComponent} from './braavos/braavos.component';
import {DorneComponent} from './dorne/dorne.component';
import {EssosComponent} from './essos/essos.component';
import {WinterfellComponent} from './winterfell/winterfell.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "braavos", component: BraavosComponent},
  {path: "dorne", component: DorneComponent},
  {path: "essos", component: EssosComponent},
  {path: "winterfell", component: WinterfellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
