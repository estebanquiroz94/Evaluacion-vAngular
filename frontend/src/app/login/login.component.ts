import { Component, OnInit } from '@angular/core';
import {LoginService} from 'app/login/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent {
   
  validationMessage :string;
  isValid :boolean;

  constructor(private _loginService: LoginService){
  }

  sendForm(form){

    this._loginService.validateUser(form.value.email, form.value.password)
    .subscribe(
      (data: Response) => 
      {             
        if (data["answerPetition"] != "validated") 
        {
          this.validationMessage = "Error en el inicio sesión";
          this.isValid = false;
        }
        else
        {
          // 
        }
      }
    )
  }
}
