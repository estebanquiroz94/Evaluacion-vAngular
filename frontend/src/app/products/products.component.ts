;import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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

  // products = [{nameProduct: 'Aguacate', image: '../../assets/img/canela.jpg', price: '20', unitsAvailable: 5},
  // {nameProduct: 'Canela', image: '../../assets/img/tomate.jpg', price: '2', unitsAvailable: 320},
  // {nameProduct: 'Ajo', image: '../../assets/img/ajo.jpg', price: '5', unitsAvailable: 20},
  // {nameProduct: 'Almendras', image: '../../assets/img/almendras.jpg', price: '35', unitsAvailable: 800},
  // {nameProduct: 'Arándanos', image: '../../assets/img/arandanos.jpg', price: '30', unitsAvailable: 500},
  // {nameProduct: 'Brócoli', image: '../../assets/img/brocoli.png', price: '80', unitsAvailable: 450},
  // {nameProduct: 'Guayaba', image: '../../assets/img/guayaba.png', price: '10', unitsAvailable: 280}
//]

  constructor(private _productService: ProductService) 
  {    

    this._productService.loadAllProducts()
    .subscribe(
      (data: Product[]) =>{

        data.forEach(element => {
          this.products.push(element)
        });        
        
      })
  }
}

class Product {
    _id: String;
    nameProduct: String;
    image: String;
    price: String;
    unitsAvaliable: String
}