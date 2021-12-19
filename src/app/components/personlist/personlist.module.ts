import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PersonModule } from '../person/person.module';
import { PersonListRoutingModule } from '../person/personlist-routing.module';
import { PersonfilterModule } from '../personfilter/personfilter.module';
import { UppdragModule } from '../uppdrag/uppdrag.module';
import { PersonlistComponent } from './personlist.component';



@NgModule({
  declarations: [
    PersonlistComponent
  ],
  imports: [
    CommonModule, 
    PersonModule,
    PersonListRoutingModule,
    PersonfilterModule,
    FlexLayoutModule,
    UppdragModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    PipesModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class PersonlistModule { }
