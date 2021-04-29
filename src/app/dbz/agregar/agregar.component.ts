import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
 })

export class AgregarComponent implements OnInit {

  constructor(private dbzService:DbzService) {

   }

  @Input()
  nuevo:Personaje={
    nombre:'',
    poder:0
  }

  //@Output() onNuevoPersonaje:EventEmitter<Personaje>= new EventEmitter();

  ngOnInit() {
  }

  agregar(){

    if (this.nuevo.nombre.trim().length ===0) {
      return;
   }
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.limpiar();
  }
  private limpiar(){
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
