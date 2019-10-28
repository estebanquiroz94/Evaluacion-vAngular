import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ProductsComponent } from './products/products.component';
import { ProductsUiComponent } from './products-ui/products-ui.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    BarraNavegacionComponent,
    ProductsComponent,
    ProductsUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
