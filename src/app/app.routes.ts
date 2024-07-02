import { Component } from "@angular/core";


import { RouterModule , Routes } from "@angular/router";

//Compomentes//

import { ServiciosComponent } from "./componentes/servicios/servicios.component";
import { HomeComponent } from "./componentes/home/home.component";
import { ContactosComponent } from "./componentes/contactos/contactos.component";
import { NosotrosComponent } from "./componentes/nosotros/nosotros.component";
import { TrayectoriaComponent } from "./componentes/trayectoria/trayectoria.component";
import { AplicacionesComponent } from "./componentes/aplicaciones/aplicaciones.component";
import { AutomatizacionComponent } from "./componentes/automatizacion/automatizacion.component";
import { CiberseguridadComponent } from "./componentes/ciberseguridad/ciberseguridad.component";
import { ConsultoriaComponent } from "./componentes/consultoria/consultoria.component";
import { InteligenciaComponent } from "./componentes/inteligencia/inteligencia.component";
import { NubeComponent } from "./componentes/nube/nube.component";
import { SoporteComponent } from "./componentes/soporte/soporte.component";
import { DatosComponent } from "./componentes/datos/datos.component";


//Ruteo de componentes//
const APP_ROUTES: Routes =[
    { path:'home', component: HomeComponent },
    { path:'servicios', component: ServiciosComponent },
    { path:'contactos', component: ContactosComponent },
    { path:'nosotros', component: NosotrosComponent },  
    { path:'trayectoria', component: TrayectoriaComponent },
    { path:'aplicacione', component: AplicacionesComponent },
    { path:'automatizacion', component: AutomatizacionComponent },
    { path:'ciberseguridad', component: CiberseguridadComponent },
    { path:'consultoria', component: ConsultoriaComponent },
    { path:'inteligencia', component: InteligenciaComponent },
    { path:'nube', component: NubeComponent },
    { path:'soporte', component: SoporteComponent },
    { path:'datos', component: DatosComponent },
    { path:'**', pathMatch: 'full' ,  redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);    