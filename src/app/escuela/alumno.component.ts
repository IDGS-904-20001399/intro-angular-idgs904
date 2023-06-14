import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  template: `
    <div>
      <b>Matricula:</b> {{Alumnos.matricula}}
    </div>
    <div>
      <b>Nombre:</b> {{Alumnos.nombre}}
    </div>
    <div>
      <b>Fecha nacimeinto:</b> {{Alumnos.fechaNacimiento | date}}
    </div>
    <div>
      <b>pago:</b> {{Alumnos.pagoIns | currency}}
    </div>
  `
})
export class AlumnoComponent{
    constructor() {
    }

  Alumnos = {
    matricula: 1234,
    nombre: 'Edgar',
    fechaNacimiento: new Date(),
    pagoIns: 2759.23
  }
}