import { Component, OnInit, Input } from '@angular/core';
import { BarraNavegacionService } from './barra-navegacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  @Input() userId : string;
  constructor(private _barraService: BarraNavegacionService, private _router: Router) 
  {

  }
 private productCounter: number = 1;
  public productCounterCopy: number;
  ngOnInit() {
    
    
  }

markProduct(){
    this._barraService.loadAddProducts()
    .subscribe(
      (data: any) =>{
        console.log(this.productCounter);
        
        this.productCounter = data;
      }
      )
  }
TemporalProductsByUser(userId: String){
  this._router.navigate(['../ShopCar'], {queryParams: { "param": userId}});
  }
}
