import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx'
import { Response } from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Input() userId : any;
  initialUrl: string = 'http://localhost:3008/api/';
  finalUrl: string;
  products: any;
  temporalProduct:TemporalProduct;
  result:any;
  data: any;
  constructor(private _httpClient: HttpClient) 
  {
    
  }
  
  loadAllProducts(){

    try {
      this.finalUrl = this.initialUrl+"/products/getAllProducts";
      console.log(this.finalUrl);
      
      this.products = this._httpClient.get<Product[]>(this.finalUrl)
      .map((response: Product[]) => response)            

    } catch (error) {
      console.log(error);
    }   

    return this.products;
    
  }

  SaveTemporalProduct(producto: Product, user:String){
    // //Create all url
    // var finalUrl = this.initialUrl+'products/saveTemporalByUser';
    
    // //Instance of parameters that will be send 
    // let datos = {"email" : "email", "pass": "password"}
    // console.log('Antes de ejecutar peticion');
    
    // //Start petition for API Backend
    // this.data = this._httpClient.post(finalUrl, datos)
    // .map((response: Response) => response)

    //Create all url
    var finalUrl = this.initialUrl+'login';
    
    //Instance of parameters that will be send 
    let datos = {"email" : "email", "pass": "password"}
    console.log('Antes de ejecutar peticion');
    
    //Start petition for API Backend
    this.data = this._httpClient.post(finalUrl, datos)
    .map((response: Response) => response)

    return this.data;
    }    
}
