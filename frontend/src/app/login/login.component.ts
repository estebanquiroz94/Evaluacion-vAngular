import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
  prueba :string;
  constructor(){
  }
  enviarForm(form){
    this.prueba = "Error inicio sesión";
    console.log(form);
  }
}
