import { Component, OnInit } from '@angular/core';
import {ShopCarService} from './shop-car.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
  subTotalPrice :number;
  subTotal :number;
  userLogin:String;
  total:number = 0;

  constructor(private _shopCarService: ShopCarService, private _activateRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this._activateRoute.queryParams
    .subscribe(params => {
        this.user = params['userEmail'];
        this.userLogin = this.user;
        this.TemporalProductsByUser(this.user)
    });
  }
  
  TemporalProductsByUser(user: string){
    this.productsCopy = [];
    this.products = [];
        //Load an show all products registers
        this._shopCarService.loadProductsByUser(user)
        .subscribe(
          (data: Product[]) =>{
            data.forEach(element => {
              this.subTotal = (element.price * element.quantity);
              this.subTotalPrice = (Number(this.subTotalPrice)+1 + this.subTotal)
              this.products.push(element)
              this.total = this.total + this.subTotal;
            });
          })
          this.productsCopy = this.products;
  }
  
  DeleteTeporalByUser(user: string){
    //Load an show all products registers
    this._shopCarService.DeleteTemporalByUser(user)
    .subscribe(
      (data: Response) =>{
        if(data["answer"] == "ok")
      {
        // Create a new instance for to view products catalog
        this._router.navigate(['../viewCatalog'], { queryParams: { userEmail: this.userLogin} });
        this.TemporalProductsByUser(user);
        this.total = 0;
      }
      else{
        alert(data)
      }
    })
  }

  BuyProducts(user: string){
    this._shopCarService.BuyProducts(user)
    .subscribe(
      (data: Response) =>{
        if(data["answer"] == "ok")
      {
        this.DeleteTeporalByUser(user);
        alert(data["message"]);
        this._router.navigate(['../viewCatalog'], { queryParams: { userEmail: this.userLogin} });
        this.total = 0;
      }
      else{
        if(data["answer"] == "bad"){
          alert(data["message"])
        }
      }
    })
  }
}
