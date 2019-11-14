import { Observable } from 'rxjs';

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class BarraNavegacionService {
public numeroSumado: any =0;
  constructor() { }

  loadAddProducts(){
    this.numeroSumado = this.numeroSumado +1;
    return Observable.of(this.numeroSumado)
  }

}
