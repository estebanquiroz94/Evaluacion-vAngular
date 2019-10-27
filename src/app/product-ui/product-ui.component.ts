import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-ui',
  templateUrl: './product-ui.component.html',
  styleUrls: ['./product-ui.component.css']
})

export class ProductUiComponent {
  @Input() product:any;

  constructor() 
  {
    console.log(this.product);
  }

}
