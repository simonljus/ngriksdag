import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Pipe({
  name: 'controlfilter'
})
export class PersonfilterPipe implements PipeTransform {

  transform(control:FormControl,array: Array<string>): Observable<Array<string>> {
    return control.valueChanges.pipe(startWith(control.value),map(v=>(v as string)?.toLowerCase()|| ''),map(v=>array.filter(a=>a.toLowerCase().includes(v),)));
  }

}
