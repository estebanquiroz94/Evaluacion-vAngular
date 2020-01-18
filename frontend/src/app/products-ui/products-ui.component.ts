import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {BarraNavegacionComponent} from '../barra-navegacion/barra-navegacion.component';
import {ProductService} from '../products/product.service';


@Component({
  selector: 'products-ui',
  templateUrl: './products-ui.component.html',
  styleUrls: ['./products-ui.component.css']
})
export class ProductsUiComponent {

  @Input() product:any;
  @Input() userLogin:any;

  constructor(private _router: Router, private _barraNavegacion: BarraNavegacionComponent, private _productService: ProductService) 
  { }
  //Show component for view more about this product
  viewMoreProduct(product){
    let result = JSON.stringify(product);    
    this._router.navigate(['../viewMore'], {queryParams: { "product": result}})
  }

  //Add and notificate a new Product
  AddNewProduct(product){ 
    this._productService.SaveTemporalProduct(product, this.userLogin)
  }
}


