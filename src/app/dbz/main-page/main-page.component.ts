import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo:Personaje={
    nombre:'Maestro Rochi',
    poder:500
  }

  personajes:Personaje[]= [
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder:7500
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  agregarNuevoPersonaje(personaje:Personaje){
     this.personajes.push(personaje);
  }

}
