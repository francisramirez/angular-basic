import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[MainPageComponent]
  ,
  declarations: [MainPageComponent]
})
export class DbzModule { }
