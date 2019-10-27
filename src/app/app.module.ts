import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import { CatalogComponent } from './catalog/catalog.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ProductsComponent } from './products/products.component';
import { ProductUiComponent } from './product-ui/product-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogComponent,
    BarraNavegacionComponent,
    ProductsComponent,
    ProductUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
