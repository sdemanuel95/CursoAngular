import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{
    
    public nombre_prenda = 'Pantalones Vaqueros';
    public coleccion_ropa = ['Pantalones Blancos','Camiseta Roja'];

    prueba(nombre_prenda){
        return nombre_prenda;
    }
    
    addRopa(nombre_prenda:string):Array<string>{
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    deleteRopa(index:number){
        this.coleccion_ropa.splice(index,1);
    }

    getRopa():Array<string>{
        return this.coleccion_ropa;
    }
}