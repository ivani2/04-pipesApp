import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  orderBy: string = "";
  enMayusculas: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: "Superman",
      vuela: true,
      color: Color.azul
    },
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Robin",
      vuela: false,
      color: Color.verde
    },
    {
      nombre: "Mujer Maravilla",
      vuela: true,
      color: Color.amarillo
    },
    {
      nombre: "Rorschac",
      vuela: false,
      color: Color.gris
    },
    {
      nombre: "Spiderman",
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: "Cyborg",
      vuela: true,
      color: Color.azul
    },

  ]; 

  getValorEnMayusculas(){
    return ( this.enMayusculas ) ? "Cambiar a Minúsculas" : "Cambiar a Mayúsculas";
  }
  cambiarEnMayusculas(){
    ( this.enMayusculas ) ? this.enMayusculas=false : this.enMayusculas=true;
  }

  cambiarOrden(nuevoOrden: string) {
    this.orderBy = nuevoOrden;
  }

}
