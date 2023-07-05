import { Pipe, PipeTransform } from '@angular/core';
import { alumnosIR } from './alumnos';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: alumnosIR[], args: string): alumnosIR[] {
    let filter:string = args ? args.toLocaleLowerCase(): '';
    return filter ? value.filter((alumno:alumnosIR)=>{
      alumno.nombre.toLocaleLowerCase().indexOf(filter)!=-1
    }): value
  }

}
