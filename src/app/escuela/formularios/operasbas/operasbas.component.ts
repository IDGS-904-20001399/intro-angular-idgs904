import { Component } from '@angular/core';


@Component({
  selector: 'app-operasbas',
  templateUrl: './operasbas.component.html',
  styleUrls: ['./operasbas.component.css']
})
export class OperasbasComponent {
  num1!:number;
  num2!:number;
  resultado!:number;
  operacionSeleccionanda:string = 'suma';
  tipoOperaciones = [
    'suma',
    'resta',
    'multiplicacion',
    'division',
  ]

  calcular(){
    switch(this.operacionSeleccionanda){
      case 'suma':
        this.resultado = this.num1 + this.num2;
        break;
      case 'resta':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacion':
        this.resultado = this.num1 * this.num2;
        break;
      case 'division':
        this.resultado = this.num1 / this.num2;
        break;
    }
  }
}
