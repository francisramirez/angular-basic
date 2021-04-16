import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HereoComponent } from './heroe/Hereo.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[
    HereoComponent,
    ListadoComponent
  ],
  exports:[ // componentes que se quiere que sean utilizados en otros modulos //
    ListadoComponent
  ],
  imports:[ // Solo los modulos //
      CommonModule // si usa unas de las directivas propias de angular(ng if o ng for) se debe importar este modulo.
  ]
})

export class HeroesModule {

}
