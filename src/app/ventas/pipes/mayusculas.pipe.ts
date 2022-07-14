import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(value: string, convertirStringMayuscula: boolean =  true): string {
        // return "Hola MUNDO!!!! DE LOS PIPES";
        // return value.toUpperCase();

        // if( convertirStringMayuscula ){
        //     return value.toUpperCase();
        // }
        // else{
        //     return value.toLowerCase();
        // }

        return ( convertirStringMayuscula ) ? value.toUpperCase() : value.toLowerCase();
    }

}