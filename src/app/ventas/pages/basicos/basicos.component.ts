import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "ivan";
  nombreUpper: string = "IVAN";
  nombreCompleto: string = "IvAn MaDrIgAl";
  
  fecha: Date = new Date(); // el día de hoy

  constructor() { }


}
