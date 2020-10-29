import { Component } from '@angular/core';
import { PeticionesService} from '../services/peticiones.service';

@Component({
    selector : 'plantillas',
    templateUrl : './plantillas.component.html',
    providers : [PeticionesService]
})

export class PlantillasComponent{

    public titulo:string;
    public administrador;
    constructor(private _peticionesService:PeticionesService){
        this.titulo = 'Plantillas ngTemplate en angular';
        this.administrador = true;
    }

    cambiarAdmin(){
        this.administrador = (!this.administrador);
    }

}