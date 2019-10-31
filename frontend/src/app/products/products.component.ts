import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() product : any;
  initialUrl: string = 'http://localhost:3008/api/';

  products = [{nameProduct: 'Aguacate', image: '../../assets/img/canela.jpg', price: '20', unitsAvailable: 5},
  {nameProduct: 'Canela', image: '../../assets/img/tomate.jpg', price: '2', unitsAvailable: 320},
  {nameProduct: 'Ajo', image: '../../assets/img/ajo.jpg', price: '5', unitsAvailable: 20},
  {nameProduct: 'Almendras', image: '../../assets/img/almendras.jpg', price: '35', unitsAvailable: 800},
  {nameProduct: 'Arándanos', image: '../../assets/img/arandanos.jpg', price: '30', unitsAvailable: 500},
  {nameProduct: 'Brócoli', image: '../../assets/img/brocoli.jpg', price: '80', unitsAvailable: 450},
  {nameProduct: 'Guayaba', image: '../../assets/img/guayaba.jpg', price: '10', unitsAvailable: 280}
]

  constructor(private _httpClient: HttpClient) 
  { 
    var finalUrl = this.initialUrl+"loadProducts"

    console.log('ejecutar GetAll'+finalUrl);
    
    // var result = this._http.get(finalUrl)
    // .map((response: Response) => response.json())

    console.log("result");
    
  }

}
