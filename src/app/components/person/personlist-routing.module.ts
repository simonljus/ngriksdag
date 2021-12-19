import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonlistComponent } from '../personlist/personlist.component';

const routes: Routes = [{ path: '', component: PersonlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonListRoutingModule { }
