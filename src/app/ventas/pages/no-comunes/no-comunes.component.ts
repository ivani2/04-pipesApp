import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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
    clientes: string[] = ['Ivan','Van', 'Xena' , 'Rosalia', 'Ri', 'Edson', 'Pele', 'Xochitl'];

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
  //KeyValue Pipe
  persona = {
    nombre: 'Ivan',
    edad: 27,
    direccion: 'Morelia, Michoacán'
  }
  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Async Pipe
  miObservable = interval( 5000 );//0, 1, 2, 3, 4

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 5000);
  } );

}
