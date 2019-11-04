;import { Component, OnInit, Input } from '@angular/core';
import { ProductService} from './product.service';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() product : any;
  
  products2 :any[]
  products :Product[] = []

  constructor(private _productService: ProductService) 
  {    

    //Load an show all products registers
    this._productService.loadAllProducts()
    .subscribe(
      (data: Product[]) =>{

        data.forEach(element => {
          this.products.push(element)
        });        
        
      })
  }
}

