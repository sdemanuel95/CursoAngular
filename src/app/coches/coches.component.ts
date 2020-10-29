import {Component} from '@angular/core';
import {Coche} from './coches';
import { PeticionesService } from '../services/peticiones.service';
@Component({
    selector : 'coches',
    templateUrl : './coches.component.html',
    providers : [PeticionesService]
})

export class CochesComponent{
public coche:Coche;
public coches:Array<Coche>;
public articulos;
constructor(private _peticionesService:PeticionesService){
    this.coche = new Coche("initial",1,"secontial");
    this.coches = [
        new Coche("Seat Panda",120,"Blanco"),
        new Coche("Renault Clio",140,"Blanco")
    ];
    
}

ngOnInit(){
    this._peticionesService.getArticulos().subscribe((result)=>{
        this.articulos = result;
    },
    (error)=>{
        alert("falló");
    });;

    
}

onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("",null,"");
}
}