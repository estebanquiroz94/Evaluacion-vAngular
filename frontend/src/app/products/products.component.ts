import { Component, OnInit, Input } from '@angular/core';
import { ProductService} from './product.service';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() userId : string;

  products :Product[] = [];
  productsCopy :Product[] = [];
  filterProducts :Product[] = [];

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

      this.productsCopy = this.products;
  }

  applyFilterProducts(param: any){
    
    if(param.target.value == "")
    {
    this.products = [];
    this.products = this.productsCopy;
    }
    else
    {
      this.filterProducts = [];
      
      this.productsCopy.forEach(element =>
      {
        if(element.nameProduct.toLocaleLowerCase().includes(param.target.value.toLocaleLowerCase())){
          this.filterProducts.push(element);
        }
      });

      this.products = []
      this.products = this.filterProducts;
    }
  }


}

