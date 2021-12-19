import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, debounceTime, map, Observable, switchMap } from 'rxjs';
import { Person, PersonFilter, PersonFilterProps, PersonOrderByProps } from 'src/app/models/person.model';
import { RollKod } from 'src/app/models/riksdag.model';
import { RiksdagService } from 'src/app/services/riksdag.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.scss']
})
export class PersonlistComponent{
  persons$: Observable<Array<Person>>;
  currentSort: PersonOrderByProps = 'partinamn'
  filterStore : BehaviorSubject<PersonFilter> = new BehaviorSubject<PersonFilter>({} as PersonFilter);
  sorterStore : BehaviorSubject<PersonOrderByProps> = new BehaviorSubject<PersonOrderByProps>('partinamn');
  sortOptions : Array<PersonOrderByProps> = ['partinamn','tilltalsnamn','efternamn','fodd_ar']
  constructor(private riksdagService:RiksdagService) {
    this.persons$ = this.riksdagService.getPersonLista$().pipe(
      switchMap(persons=>this.sortPersons$(persons)),
      switchMap(persons=>this.filterPersons$(persons)));
   }
   // return this.sorterStore.asObservable().pipe(map(sortBy=>this.sortPersons(sortBy || 'intressent_id',persons)))
  trackBy(i:number,p:Person):string{
    return p.intressent_id;
  }
  onFilter(filter:PersonFilter){
    this.filterStore.next(filter);
  }
  filterPersons(filter:PersonFilter,persons:Array<Person>):Array<Person>{
    const keys: Array<PersonFilterProps> = Object.keys(filter) as Array<keyof PersonFilter>;
    return keys.reduce(((filtered,k)=>this.filter(k, filter[k]?.toLowerCase(), filtered)),persons)
  }
  filter(key:keyof PersonFilter, value: Lowercase<string>,persons:Array<Person>):Array<Person>{
    if(!value){
      return persons;
    }
    if(key ==='currentUppdrag'){
      return persons.filter(person=>{
        return person.currentRollKods.has(value as Lowercase<RollKod>)
      })
    }else{
      return persons.filter(person=>(person[key].toLowerCase().includes(value)));
    }
   
  }
  filterPersons$(persons:Array<Person>):Observable<Array<Person>>{
    return this.filterStore.asObservable().pipe(debounceTime(100),map(filter=>this.filterPersons(filter,persons)));
  }
  sortPersons$(persons:Array<Person>):Observable<Array<Person>>{
    return this.sorterStore.asObservable().pipe(debounceTime(100),map(sortBy=>this.sortPersons(sortBy || 'intressent_id',persons)));
  }
  sortPersons(sortBy:PersonOrderByProps,persons:Array<Person>):Array<Person>{
    const compareFn = this.comparePerson.bind(undefined,sortBy)
    return persons.slice().sort(compareFn);
  }
  comparePerson(sortBy:PersonOrderByProps,a:Person,b:Person): -1 | 1 | 0{
    const aValue = a[sortBy]
    const bValue = b[sortBy]
    if(aValue< bValue){
      return -1;
    }
    else if(bValue <aValue){
      return 1
    }
    else{
      return a.intressent_id < b.intressent_id ? -1 : 1;
      
    }
  }
  onSort(change:MatSelectChange){
    this.sorterStore.next(change.value)
  }

}
