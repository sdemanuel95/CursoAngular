import {Pipe , PipeTransform} from '@angular/core';

@Pipe({
    name : 'conversor'
})

export class ConversorPipe implements PipeTransform{
    
    transform(value : number , por : number):string{

        return "El valor de la multiplicación es " + (value * por);
    }
}