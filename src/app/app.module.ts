import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
//rutas

import { APP_ROUTING } from './app.routes';



//servicios




//compomentes
import { AppComponent } from './app.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { TrayectoriaComponent } from './componentes/trayectoria/trayectoria.component';
import { AplicacionesComponent } from './componentes/aplicaciones/aplicaciones.component';
import { AutomatizacionComponent } from './componentes/automatizacion/automatizacion.component';
import { ConsultoriaComponent } from './componentes/consultoria/consultoria.component';
import { NubeComponent } from './componentes/nube/nube.component';
import { CiberseguridadComponent } from './componentes/ciberseguridad/ciberseguridad.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { InteligenciaComponent } from './componentes/inteligencia/inteligencia.component';
import { SoporteComponent } from './componentes/soporte/soporte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    NavbarComponent,
    HomeComponent,
    ContactosComponent,
    NosotrosComponent,
    TrayectoriaComponent,
    AplicacionesComponent,
    AutomatizacionComponent,
    ConsultoriaComponent,
    NubeComponent,
    CiberseguridadComponent,
    DatosComponent,
    InteligenciaComponent,
    SoporteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    MatSnackBarModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
        HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
