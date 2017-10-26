import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'square'
})

export class sqaurePipes implements PipeTransform{
        transform(value:number){
            return value * value;
        }
}