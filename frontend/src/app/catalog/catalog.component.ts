import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  userLogin:String;
  constructor(private _activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activateRoute.queryParams
      .filter(params => params.userEmail)
      .subscribe(params => {
        this.userLogin = params.userEmail;
      });
  }

}
