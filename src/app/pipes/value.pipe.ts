import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'value'
})

export class ValuePipe<V> implements PipeTransform {
    transform<V>(value: Record<string,V>,key:string): V{
        return value[key]
    }
}