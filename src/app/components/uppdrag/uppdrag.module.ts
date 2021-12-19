import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UppdragComponent } from './uppdrag.component';



@NgModule({
  declarations: [
    UppdragComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UppdragComponent
  ]
})
export class UppdragModule { }
