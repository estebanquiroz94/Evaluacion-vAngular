import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  viewProduct: Product;
  loginUser: String;

  constructor(private _activateRoute: ActivatedRoute, private _router: Router) 
  {
    
  }
  
  ngOnInit() {
    this._activateRoute
    .queryParams
    .subscribe(params => {
        this.viewProduct = JSON.parse(params['product']) as Product;
        this.loginUser = params['userLogin'];        
    });
  }

  GoBackStart(loginUser: String){
    this._router.navigate(['../viewCatalog'], {queryParams: { userEmail: loginUser}})
    }

}
