import {ModuleWithComponentFactories, ModuleWithProviders} from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

//Importar componentes propios
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CochesComponent } from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
const appRoutes : Routes = [

    {path : '' , component : HomeComponent},
    {path : 'empleado' , component : EmpleadoComponent},
    {path : 'fruta' , component : FrutaComponent},
    {path : 'contact/:page' , component : ContactComponent},
    {path : 'home' , component : HomeComponent},
    {path : 'coches' , component : CochesComponent},
    {path : 'contact' , component : ContactComponent},
    {path : 'plantillas' , component : PlantillasComponent},
    {path : '**' , component : HomeComponent}
];

export const appRoutingProvider : any [] = [];

export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);