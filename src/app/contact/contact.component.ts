import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector : 'contact',
    templateUrl : './contact.component.html',
    styleUrls : ['./contact.component.css']
})


export class ContactComponent{
    public title = 'Página de contacto de Ema';

    public parametro;
    constructor(
        private _route:ActivatedRoute,
        private _router : Router){
    }
    redirigir(){
        this._router.navigate(['/contact','EmaSuarez']);
    }
    ngOnInit(){
        this._route.params.forEach((params : Params)=>{
            this.parametro = params['page'];
        });
    }


}