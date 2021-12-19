import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'function'
})

export class FunctionPipe<T,V> implements PipeTransform {
    transform<T,V>(value: T, mapper:(value:T)=>V): V {
        return mapper(value);
    }
}