import {Component} from '@angular/core';
import {Empleado} from './empleado';
@Component({
    selector : 'Empleado',
    templateUrl : './empleado.component.html',
    styleUrls : ['./empleado.component.css']
})

export class EmpleadoComponent{

    public empleado:Empleado;
    public trabajadores:Empleado[];
    public trabajadorExterno:boolean;
    public color:string;
    public color_seleccionado:string;
    ngOnInit(){
        this.empleado = new Empleado('ema',24,'Developer',true);
        this.trabajadores = [
            new Empleado('Ema',20,'Games creator',true),
            new Empleado('David',24,'Developer',false),
            new Empleado('Suarez',30,'Engineer',true)

        ];
        
        this.trabajadorExterno = true;
        this.color = "red";
        this.color_seleccionado ="#ccc";
    }

    public cambiarExterno(valor){
        this.trabajadorExterno = valor;
    }

}