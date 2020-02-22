import { Component, OnInit } from '@angular/core';
import {ShopCarService} from './shop-car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shop-car',
  templateUrl: './shop-car.component.html',
  styleUrls: ['./shop-car.component.css']
})
export class ShopCarComponent implements OnInit {

  user: string;
  product: Product;
  products :Product[] = [];
  productsCopy :Product[] = [];

  constructor(private _shopCarService: ShopCarService, private _activateRoute: ActivatedRoute) {
    
   }


  ngOnInit() {
    this._activateRoute
    .queryParams
    .subscribe(params => {
        this.user = params['param'];
        this.TemporalProductsByUser(this.user)
    });
  }
  
  TemporalProductsByUser(user: string){
        //Load an show all products registers
        this._shopCarService.loadProductsByUser(user)
        .subscribe(
          (data: Product[]) =>{
    
            data.forEach(element => {
              this.products.push(element)
            });        
          })
          this.productsCopy = this.products;
        }
}
