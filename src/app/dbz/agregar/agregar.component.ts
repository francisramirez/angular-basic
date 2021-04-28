import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
 })

export class AgregarComponent implements OnInit {

  constructor() { }

  @Input()
  nuevo:Personaje={
    nombre:'',
    poder:0
  }

  @Output() onNuevoPersonaje:EventEmitter<Personaje>= new EventEmitter();

  ngOnInit() {
  }

  agregar(){

    if (this.nuevo.nombre.trim().length ===0) {
      return;
   }

    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);

    this.limpiar();

  }
  private limpiar(){
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
