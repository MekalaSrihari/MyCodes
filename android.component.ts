import {Component} from '@angular/core';

@Component({
   
    template:`<div style="width:350px;height:200px;background-color:yellow">
    This is Android Page</div>
    <a [routerLink]="['type', 'Eclipse']" >Eclipse</a>
    <a [routerLink]="['type', 'Android Studio']" >Android Studio</a>
    <router-outlet></router-outlet>`
})

export class androidComponent{
    
}