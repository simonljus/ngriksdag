import { NgModule } from '@angular/core';
import { FunctionPipe } from './function.pipe';
import { ValuePipe } from './value.pipe';

@NgModule({
    imports: [],
    exports: [FunctionPipe,ValuePipe],
    declarations: [FunctionPipe,ValuePipe],
    providers: [],
})
export class PipesModule { }
