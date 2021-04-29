import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface.ts';
import { DbzService } from '../services/dbz.service';


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

  constructor() {
  }

  ngOnInit() {

  }


}
