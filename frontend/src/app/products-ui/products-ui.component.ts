import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {BarraNavegacionComponent} from '../barra-navegacion/barra-navegacion.component';
import {ProductService} from '../products/product.service';


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx'
import { Options } from 'selenium-webdriver/chrome';


@Injectable()
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
  quantity: any;

  ngOnInit() { }
  constructor(private _router: Router, private _barraNavegacion: BarraNavegacionComponent, private _productService: ProductService, private _httpClient: HttpClient) 
  { }
  //Show component for view more about this product
  viewMoreProduct(product){
    // product.userLogin = this.userLogin;
    let result = JSON.stringify(product);
    console.log(result);
    
    this._router.navigate(['../viewMore'], {queryParams: { "product": result , "userLogin": this.userLogin}})
  }

  //Add and notificate a new Product
  AddNewProduct(product){ 
    this._productService.SaveTemporalProduct(product, this.userLogin, this.quantity)
    .subscribe(
      (data: Response) => 
      {            
        if(data){
          this._barraNavegacion.markProduct()
        }
      }
    )
  }

  change(event) 
  {
    this.quantity = event.target.value;
  }
}



