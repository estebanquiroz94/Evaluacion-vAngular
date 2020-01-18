import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Input() userId : any;
  initialUrl: string = 'http://localhost:3008/api/';
  finalUrl: string;
  products: any;

  constructor(private _httpClient: HttpClient) 
  {
    
  }
  
  loadAllProducts(){

    try {
      this.finalUrl = this.initialUrl+"getAllProducts";
      this.products = this._httpClient.get<Product[]>(this.finalUrl)
      .map((response: Product[]) => response)            

    } catch (error) {
      console.log(error);
    }   
    
    return this.products;
  }

  SaveTemporalProduct(producto: Product, user:String){
    alert(user);
    }
}
