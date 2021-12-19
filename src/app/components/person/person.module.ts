import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UppdragModule } from '../uppdrag/uppdrag.module';
import { PersonComponent } from './person.component';





@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    PipesModule,
    UppdragModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[PersonComponent]
})
export class PersonModule { }
