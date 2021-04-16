import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Hereo',
  templateUrl: './Hereo.component.html',
  styleUrls: ['./Hereo.component.css']
})
export class HereoComponent implements OnInit {
 nombre:string ='Ironman';
 edad:number=45;
  constructor() { }

  ngOnInit() {
  }
  obtenerNombre():string{
      return `${this.nombre} - ${this.edad}`;
  }
  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  cambiarNombre():void{
    this.nombre='Spiderman';
  }
  cambiarEdad():void{
    this.edad=35;
  }

}
