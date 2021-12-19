import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { Person, PersonFilterProps } from 'src/app/models/person.model';
import { RiksdagService } from 'src/app/services/riksdag.service';

@Component({
  selector: 'app-personfilter',
  templateUrl: './personfilter.component.html',
  styleUrls: ['./personfilter.component.scss']
})
export class PersonfilterComponent implements OnInit,OnDestroy {
  public selectedProps : Array<PersonFilterProps> = ['partinamn','tilltalsnamn', 'efternamn','currentUppdrag',];
  public formGroup = new FormGroup({efternamn:new FormControl(),tilltalsnamn:new FormControl(),partinamn:new FormControl(),currentUppdrag:new FormControl()});
  private mergedPersonStore = new BehaviorSubject<Partial<Record<Exclude<keyof Person,''>,Array<string>>>>({});
  public mergedPerson$ = this.mergedPersonStore.asObservable();
  public subscriptions : Subscription = new Subscription();
  @Output()
  public filter  = new EventEmitter<Record<keyof Person,string>>();
  constructor(private riksdagService:RiksdagService,private fb:FormBuilder) {
    
   }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  ngOnInit(): void {
    const personSub = this.riksdagService.getPersonLista$().pipe(tap(persons=>{
      const mergedPersonSet : Partial<Record<PersonFilterProps,Set<string>>> = {};
      const props: Array<PersonFilterProps> = ['efternamn','tilltalsnamn','partinamn', 'currentUppdrag']
      persons.forEach(person=>{
        props.forEach(prop=>{
          let s = mergedPersonSet[prop] as Set<string>
          if(!s){
            s = new Set<string>();
            mergedPersonSet[prop] = s
          }
          if(prop === 'currentUppdrag'){
            person.currentUppdrag.map(uppdrag=>uppdrag.roll_kod).forEach(s.add, s)
          }else{
            mergedPersonSet[prop]?.add(person[prop])
          }
         
        })
      })
      const mergedPersonArr : Partial<Record<PersonFilterProps,Array<string>>> = {};
      props.forEach(prop=>{
        const s = mergedPersonSet[prop];
        mergedPersonArr[prop]= Array.from(s || []).sort()
      })
      this.mergedPersonStore.next(mergedPersonArr);
      

    }
      )).subscribe();
    const filterSub = this.formGroup.valueChanges.pipe(tap(v=>{
        this.filter.emit(v);
      })).subscribe()
    this.subscriptions.add(personSub);
    this.subscriptions.add(filterSub)
  }
  getDisplayFn(prop: string): (o: string)=>string{
      return (o:string)=>o;
  }
  addFilter(prop:string){
    this.formGroup.addControl(prop, new FormControl())
  }
  

}