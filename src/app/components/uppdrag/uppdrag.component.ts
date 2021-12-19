import { Component, Input } from '@angular/core';
import { Uppdrag } from 'src/app/models/riksdag.model';

@Component({
  selector: 'app-uppdrag',
  templateUrl: './uppdrag.component.html',
  styleUrls: ['./uppdrag.component.scss']
})
export class UppdragComponent {
  @Input()
  public uppdrag: Uppdrag;
  constructor() { }



}
