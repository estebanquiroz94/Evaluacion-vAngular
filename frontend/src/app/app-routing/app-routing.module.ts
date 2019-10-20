import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/login.component'
import { CatalogComponent } from 'app/catalog/catalog.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'viewCatalog/:usuario', component: CatalogComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
