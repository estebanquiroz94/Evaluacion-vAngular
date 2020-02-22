import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx'
@Injectable({
  providedIn: 'root'
})
export class ShopCarService {

  initialUrl: string = 'http://localhost:3008/api/';
  finalUrl: string;
  products: any;

  constructor(private _httpClient: HttpClient) 
  {

  }


  loadProductsByUser(user: string){
    alert('va leer alguito');
    alert(user);
    try {
      this.finalUrl = this.initialUrl+"/products/getProductsByUser";
      console.log(this.finalUrl);
      var params = new HttpParams().set("user", user);
      this.products = this._httpClient.get<Product[]>(this.finalUrl,{params})
      .map((response: Product[]) => response)            

    } catch (error) {
      console.log(error);
    }   

    return this.products;
    
  }
}