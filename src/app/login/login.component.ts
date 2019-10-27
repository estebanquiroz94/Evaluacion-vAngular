import { Component} from '@angular/core';
import {LoginService} from 'app/login/login.service';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent {
   
  //Variable declaration
  validationMessage :string;
  isValid :boolean;

  //Constructor
  constructor(private _loginService: LoginService, private _route: Router){
  }

  //Process info User Login
  sendForm(form){

    this._loginService.validateUser(form.value.email, form.value.password)
    .subscribe(
      (data: Response) => 
      {             
        //Validate response from API nodeJs
        if (data["answerPetition"] != "validated") 
        {
          this.validationMessage = "Error en el inicio sesión";
          this.isValid = false;
        }
        else
        {
          this.validationMessage = "";
          this._route.navigate(['viewCatalog']);
          // Create a new instance for to view products catalog
        }
      }
    )
  }
}
