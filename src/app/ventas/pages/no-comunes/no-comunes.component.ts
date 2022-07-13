import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

    //i18nSelect
    nombre: string = "Ivan";
    genero: string = 'masculino';

    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino': 'invitarla'
    }

    //i18nPlural
    clientes: string[] = ['Ivan','Van', 'Xena' , 'Xena', 'Xena', 'Xena', 'Xena', 'Xena'];

    clientesMapa = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      '=2': 'tenemos dos clientes esperando.',
      'other': 'tenemos # clientes esperando.',
    }

    cambiarPersona(){
      if(this.genero=="masculino"){
        this.nombre="Julia";
        this.genero="femenino";
      }
      else{
        this.nombre="Ivan";
        this.genero="masculino";
      }
    }

    eliminarCliente(){
      this.clientes.pop();
    }
  
}
