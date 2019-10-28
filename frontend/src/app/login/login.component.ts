import { Component} from '@angular/core';
import {LoginService} from '../login/login.service';
import { Router } from '@angular/router';

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
  constructor(private _loginService: LoginService, private router: Router){
  }

  //Process info User Login
  sendForm(form){
  console.log('envió formulario');

    this._loginService.validateUser(form.value.email, form.value.password)
    .subscribe(
      (data: Response) => 
      {             
        console.log(data);
        
        //Validate response from API nodeJs
        if (data["answerPetition"] != "validated") 
        {
          this.validationMessage = "Error en el inicio sesión";
          this.isValid = false;
        }
        else
        {
          this.validationMessage = "";
          // Create a new instance for to view products catalog
          this.router.navigate(['/viewCatalog']);
        }
      }
    )
  }
}