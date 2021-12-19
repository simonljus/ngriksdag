import { Component, Input } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonDTO } from 'src/app/models/riksdag.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input()
  public person :Person;
  public expanded = false;
  constructor() { }
  toName (person : PersonDTO){
    return `${person.tilltalsnamn} ${person.efternamn}`
  }
  toggleExpanded(){
    this.expanded =!this.expanded
  }


}
