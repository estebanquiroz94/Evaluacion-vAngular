import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  initialUrl: string = 'http://localhost:3008/api/';
  finalUrl: string;
  products: any;

  constructor(private _httpClient: HttpClient) 
  {  
     this.finalUrl = this.initialUrl+"getAllProducts"      
  }
  
  loadAllProducts(){

    try {
      console.log('inicia loadAllProducts');
      console.log(this.finalUrl);

      this.products = this._httpClient.get<Product[]>(this.finalUrl)
      .map((response: Product[]) => response)            

    } catch (error) {
      console.log(error);
    }   
    
    return this.products;
  }
}

class Product {
  _id: String;
  nameProduct: String;
  image: String;
  price: String;
  unitsAvaliable: String
}
