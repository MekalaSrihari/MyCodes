import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
   
    template:`<h1>
    Android IDE Selected:{{selectedIDE}}`
})

export class androidideComponent implements OnInit{

    public selectedIDE:string;
    public observerRef:any;

    constructor(private route:ActivatedRoute){
             
    }

    ngOnInit(){
          //this.selectedIDE=route.snapshot.params['ideselectedName']
          this.observerRef=this.route.params.subscribe(params=>{
            this.selectedIDE=params['ideselectedName'];
        });
    }

    ngOnDestroy(){
        this.observerRef.unsubscribe();        
                }
}