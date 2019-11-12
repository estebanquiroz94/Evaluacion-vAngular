import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'products-ui',
  templateUrl: './products-ui.component.html',
  styleUrls: ['./products-ui.component.css']
})
export class ProductsUiComponent {

  @Input() product:any;

  constructor(private _router: Router) 
  {
 
  }

  viewMoreProduct(product){
    let result = JSON.stringify(product);    
    this._router.navigate(['../viewMore'], {queryParams: { "product": result}})
  }
}
