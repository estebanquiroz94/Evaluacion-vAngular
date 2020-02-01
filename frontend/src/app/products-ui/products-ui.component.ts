import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {BarraNavegacionComponent} from '../barra-navegacion/barra-navegacion.component';
import {ProductService} from '../products/product.service';

import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'
import { Response } from 'selenium-webdriver/http';


@Component({
  selector: 'products-ui',
  templateUrl: './products-ui.component.html',
  styleUrls: ['./products-ui.component.css']
})
export class ProductsUiComponent {
  initialUrl: string = 'http://localhost:3008/api/';
  data: any;
  @Input() product:any;
  @Input() userLogin:any;

  constructor(private _router: Router, private _barraNavegacion: BarraNavegacionComponent, private _productService: ProductService, private _httpClient: HttpClient) 
  { }
  //Show component for view more about this product
  viewMoreProduct(product){
    let result = JSON.stringify(product);    
    this._router.navigate(['../viewMore'], {queryParams: { "product": result}})
  }

  //Add and notificate a new Product
  AddNewProduct(product){ 

    try {
               
       //Create all url
    var finalUrl = this.initialUrl+'products/saveTemporalByUser';
    
    //Instance of parameters that will be send 
    let datos = {"email" : "email", "pass": "password"}
    console.log('Antes de ejecutar peticion');
    
    //Start petition for API Backend
    this.data = this._httpClient.post(finalUrl, datos)
    .map((response: Response) => response)

    } catch (error) {
      console.log(error);
    }   

    return this.data;

    
  }
    

    // return this._productService.SaveTemporalProduct(product, this.userLogin)
  }



