import { Injectable } from '@angular/core';
// import {Http, Response, HttpModule} from '@angular/http';
import 'rxjs/Rx'
import { Response } from 'selenium-webdriver/http';
@Injectable()
export class LoginService {

  initialUrl: string = 'http://localhost:3008/api/';
  data: any;
  constructor(/*private _http : Http*/) {
    
   }

   //Validate login for user and password
   validateUser(email, password){

    //Create all url
    var finalUrl = this.initialUrl+'login';
    
    //Instance of parameters that will be send 
    let datos = {"email" : email, "pass": password}
    
    //Start petition for API Backend
    // var result =  this._http.post(finalUrl, datos)
    // .map((response: Response) => response.json())
    
    return this.data;
   
   }
}