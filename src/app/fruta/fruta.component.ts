import {Component} from '@angular/core';

@Component({
    selector : 'Fruta',
    templateUrl : './fruta.component.html',
    styleUrls : ['./fruta.component.css']
})

export class FrutaComponent{
    nombre_component;
    listado_frutas;
    nombre:string;
    public trabajos:Array<any>;
    comodin:any;

    ngOnInit(){

        //variables

        var uno = 1;
        var dos = 2;
        if(uno === 1){
            let uno = 2;
            var dos = 4;
            console.log(dos);
        }
        console.log(uno);
        alert("voka la concha tu madre");
    }


    constructor(){
        this.nombre_component  = 'Componente de fruta';
        this.listado_frutas  = 'Naranja,manzana pera y sandia';
        this.nombre = 'Ema';
        this.trabajos  = ['Test',3,true];
        this.comodin = '1';
        this.holaMundo(this.nombre);
    }

    holaMundo(nombre){
        alert("hola " + nombre);
    }


}