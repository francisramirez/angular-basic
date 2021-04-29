import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  //@Input() personajes: Array<Personaje> = [];

  constructor(private dbzService:DbzService) {

   }
   get personajes():Array<Personaje>{
     return this.dbzService.personajes;
   }

  ngOnInit() {
  }

}
