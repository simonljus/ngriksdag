import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonfilterComponent } from './personfilter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PersonfilterPipe } from '../personfilter.pipe';



@NgModule({
  declarations: [
    PersonfilterComponent,
    PersonfilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    PipesModule,
    MatInputModule
  ],
  exports: [
    PersonfilterComponent
  ]
})
export class PersonfilterModule { }
