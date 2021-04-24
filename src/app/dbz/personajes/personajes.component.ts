import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent implements OnInit {

  @Input()
  personajes: Array<Personaje> = [];

  constructor() { }

  ngOnInit() {
  }

}
