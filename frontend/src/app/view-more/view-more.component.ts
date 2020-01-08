import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  viewProduct: Product;

  constructor(private _activateRoute: ActivatedRoute) 
  {
    
  }
  
  ngOnInit() {
    this._activateRoute
    .queryParams
    .subscribe(params => {
        this.viewProduct = JSON.parse(params['product']) as Product;
    });
  }

}
