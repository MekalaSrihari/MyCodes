import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'greeting'
})

export class greetingPipe implements PipeTransform{
    transform(value:string, beforestr:string, afterstr:string):string
    {
        let resultVal = beforestr +' ' + value +' '+ afterstr;
        return resultVal;
    }
}