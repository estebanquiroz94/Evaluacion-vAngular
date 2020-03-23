import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx'
@Injectable({
  providedIn: 'root'
})
export class ShopCarService {

  initialUrl: string = 'http://localhost:3008/api/';
  products: any;
  data:any;

  constructor(private _httpClient: HttpClient) 
  {

  }


  loadProductsByUser(user: string){
    try {
      var finalUrl = this.initialUrl+"products/getProductsByUser";
      var params = new HttpParams().set("user", user);
      this.products = this._httpClient.get<Product[]>(finalUrl,{params})
      .map((response: Product[]) => response)                    

    } catch (error) {
      console.log(error);
    } 
    
    return this.products;

  }

  DeleteTemporalByUser(user: string){
    try {
      var finalUrldelete = this.initialUrl+'products/DeleteTemporalByUser';

      this.data = this._httpClient.post(finalUrldelete, {user:user})
      .map((responsesita: Response) => responsesita)

    } catch (error) {
      console.log(error);
    }   
    return this.data;
  }
}
