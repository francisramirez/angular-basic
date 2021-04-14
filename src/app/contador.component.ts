import {Component} from '@angular/core'

@Component({
  selector:'app-contador',
  templateUrl:'./contador.component.html'
})
export class ContadorComponet {
  titulo:string='Contador App';
  numero:number=10;
  base:number=5;

  acumulador(valor:number){
      this.numero +=valor;
  }
}
