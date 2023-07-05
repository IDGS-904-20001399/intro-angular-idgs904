import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { AlumnoComponent } from './escuela/alumno.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OperasbasModule } from './escuela/formularios/operasbas/operasbas.module';
import { AlumnosFilterPipe } from './escuela/alumnos-filter.pipe';
import { CalificacionAlumComponent } from './escuela/calificacion-alum/calificacion-alum.component';
import { AlumnosReactiveComponent } from './escuela/formularios/alumnos-reactive/alumnos-reactive.component';
import { AppRoutingModule } from './app-routes.module';


@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent,
    AlumnoComponent,
    IricComponent,
    MenuComponent,
    SumarComponent,
    AlumnosFilterPipe,
    CalificacionAlumComponent,
    AlumnosReactiveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OperasbasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
