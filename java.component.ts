import {Component} from '@angular/core';

@Component({
   
    template:`<div style="width:350px;height:200px;background-color:green">
    <h1>This is Java Page</h1> 
    <br />
    <a [routerLink] = "['spring']">Spring</a>
    <br/>
    <a [routerLink] = "['swing']">Swing</a>
   
    <div>
    <router-outlet></router-outlet>
    </div>
    </div>`
})

export class javaComponent{
    
}