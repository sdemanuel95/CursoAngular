import { Component} from '@angular/core';
import { RopaService } from '../services/ropa.service';
@Component({
    selector : 'home',
    templateUrl : './home.component.html',
    styleUrls : ['./home.component.css'],
    providers : [RopaService]
})


export class HomeComponent{
    public title = 'Pagina Princial';
    public listado_ropa:Array<string>;
    public prenda_a_guardar:string;

    public fecha;
    public nombre:string = "Ema SuarEz";

    constructor(private _ropaService:RopaService){
        this.fecha = new Date(3017,4,15);
    }

    addRopa(prenda:string){
        this._ropaService.addRopa(prenda);
        this.prenda_a_guardar = null;
    }

    deleteRopa(index:number){
        this._ropaService.deleteRopa(index);
    }
    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

}