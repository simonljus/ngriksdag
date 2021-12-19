import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { format } from 'date-fns';
import { AsyncSubject, map, Observable, Subscription, take, tap } from 'rxjs';
import { Person, PersonDTOExtension } from '../models/person.model';
import { Parti, PersonDTO, Riksdag, RollKod, Uppdrag } from '../models/riksdag.model';

@Injectable({
  providedIn: 'root'
})
export class RiksdagService implements OnDestroy{
  partynames: Partial<Record<Parti,string>> = {C:'Centerpartiet',KD:'Kristdemokraterna',L:'Liberalerna',M:'Moderaterna',MP:'Miljöpartiet',S:'Socialdemokraterna',V:'Vänsterpartiet'};
  todaystr = format(new Date(),"yyyy-MM-dd")
  private personListaStore : AsyncSubject<Array<Person>> | undefined;
  private subscriptions = new Subscription();
  constructor(private http:HttpClient) { }

  private fetchPersonLista$():Observable<Array<Person>>{
    return this.http.get<Riksdag>('riksdagen/personlista/?utformat=json').pipe(map(r=>{
      const persons = r.personlista.person
      return persons.map(person=>this.toPerson(person))
    }));
  }
  private toPerson(person:PersonDTO):Person{
    const extension = this.getExtension(person)
    return Object.assign({},person,extension);
  }
  private getExtension(person:PersonDTO):PersonDTOExtension{
    const partinamn =  this.toParti(person.parti);
    const currentUppdrag = this.getCurrentUppdrag(person, this.todaystr);
    const currentRollKods = new Set<Lowercase<RollKod>>(currentUppdrag.map(u=>u.roll_kod.toLowerCase() as Lowercase<RollKod>));
    const displayName = `${person.tilltalsnamn} ${person.efternamn}`;
    return {partinamn,displayName,currentRollKods,currentUppdrag};
  }
  public getPersonLista$():Observable<Array<Person>>{
    if(!this.personListaStore){
      const store  = new AsyncSubject<Array<Person>>();
      this.personListaStore= store;
      const sub = this.fetchPersonLista$().pipe(take(1),tap(persons=>{
      store.next(persons)
      store.complete();
      })).subscribe()
      this.subscriptions.add(sub);
    }
    return this.personListaStore.asObservable()
  }
  private toParti(p:Parti):string{
    return this.partynames[p] || p;
  }
  private getCurrentUppdrag(person :PersonDTO,todaystr:string):Array<Uppdrag>{
    return person.personuppdrag?.uppdrag?.filter(uppdrag =>uppdrag.from.split(" ")[0] <= todaystr && (!uppdrag.tom || uppdrag.tom.split(" ")[0] >=todaystr));
    
  }
  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }
}
