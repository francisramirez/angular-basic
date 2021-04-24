import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
 })

export class AgregarComponent implements OnInit {

  constructor() { }

  @Input()
  personajes: Array<Personaje>=[];

  @Input()
  nuevo:Personaje={
    nombre:'',
    poder:0
  }

  ngOnInit() {
  }

  agregar(){

    if (this.nuevo.nombre.trim().length ===0) {
      return;
   }

    this.personajes.push(this.nuevo);
    console.log(this.nuevo);

    this.limpiar();

  }
  private limpiar(){
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
