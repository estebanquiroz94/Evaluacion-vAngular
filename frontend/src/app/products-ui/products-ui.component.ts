import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'products-ui',
  templateUrl: './products-ui.component.html',
  styleUrls: ['./products-ui.component.css']
})
export class ProductsUiComponent {

  @Input() product:any;

  constructor() 
  {
    console.log(this.product);
  }

}
