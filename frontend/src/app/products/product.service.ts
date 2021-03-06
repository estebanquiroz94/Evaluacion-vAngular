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

  SaveTemporalProduct(producto: Product, user:String, quantity: number){

    //Create all url
    var finalUrl = this.initialUrl+'products/saveTemporalByUser';
    let currentUnits = producto.unitsAvailable
    producto.user = user;
    producto.quantity = quantity;
    producto.unitsAvailable = null;

    //Start petition for API Backend
    this.data = this._httpClient.post(finalUrl, producto)
    .map((response: Response) => response)
    producto.unitsAvailable = currentUnits;

    return this.data;
    }    
}
