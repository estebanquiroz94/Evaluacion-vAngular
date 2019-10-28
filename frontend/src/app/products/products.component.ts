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

  products = [{nameProduct: 'Aguacate', image: '', price: '20', unitsAvailable: 5},
  {nameProduct: 'Canela', image: '', price: '2', unitsAvailable: 320},
  {nameProduct: 'Ajo', image: '', price: '5', unitsAvailable: 20},
  {nameProduct: 'Almendras', image: '', price: '35', unitsAvailable: 800},
  {nameProduct: 'Arándanos', image: '', price: '30', unitsAvailable: 500},
  {nameProduct: 'Brócoli', image: '', price: '80', unitsAvailable: 450},
  {nameProduct: 'Guayaba', image: '', price: '10', unitsAvailable: 280},
  {nameProduct: 'Carenepe', image: '', price: '1000', unitsAvailable: 1}
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
