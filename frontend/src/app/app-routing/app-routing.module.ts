import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/login.component'
import { CatalogComponent } from '../catalog/catalog.component';
import { BarraNavegacionComponent } from '../barra-navegacion/barra-navegacion.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'viewCatalog', component: CatalogComponent},
  {path:'navBar', component: BarraNavegacionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
