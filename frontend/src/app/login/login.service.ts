import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx'
import { Response } from 'selenium-webdriver/http';
@Injectable()
export class LoginService {

  initialUrl: string = 'http://localhost:3008/api/';
  data: any;
  constructor(private _httpClient : HttpClient) {
    
   }

   //Validate login for user and password
   validateUser(email, password){

    //Create all url
    var finalUrl = this.initialUrl+'login';
    
    //Instance of parameters that will be send 
    let datos = {"email" : email, "pass": password}
    console.log('Antes de ejecutar peticion');
    
    //Start petition for API Backend
    this.data =  this._httpClient.post(finalUrl, datos)
    .map((response: Response) => response)
    
    return this.data;
   
   }
}