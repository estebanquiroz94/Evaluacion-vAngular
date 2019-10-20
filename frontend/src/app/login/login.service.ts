import { Injectable } from '@angular/core';
import {Http, Response, HttpModule} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class LoginService {

  urlBase: string = 'http://localhost:3008/api/';
data: any;
  constructor(private _http : Http) {
    
   }

   //Validate login for user and password
   validateUser(email, password){

    console.log('Ingresó al servicio usuario:');
    console.log(email);
    console.log('Con clave:');
    console.log(password);

    console.log('Before execute authenticateUser');
    var urlFinal = this.urlBase+'login';
    console.log('urlFinal :: '+urlFinal);
    
    let datos = {"email" : email, "pass": password}
    console.log(datos);

    var result =  this._http.post(urlFinal, datos)
    .map((response: Response) => response.json())
    
    return result;
   
   }
}
