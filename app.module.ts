import { BrowserModule } from '@angular/platform-browser';
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HttpModule }  from '@angular/http';
 
 

import { AppComponent } from './app.component';
import { hoverDirective } from './custom-directives/custom-attrdirective';
import { strucDirective } from './custom-directives/custom-strucdirective';
import { sqaurePipes } from './custom-pipes/square-pipes';
import { greetingPipe} from './custom-pipes/greeting-pipe';
import{androidComponent} from './Rooting/android.component';
import{javaComponent} from './Rooting/java.component';
import{homeComponent} from './Rooting/home.component';
import{javaspringComponent} from './Rooting/java.spring.component';
import{javaswingComponent} from './Rooting/java.swing.component';
import{androidideComponent} from './Rooting/android.ide.component';
import {routes} from './app.route';


import {ParentComponent}  from './communication/parent.component';
import {ChildOneComponent}  from './communication/childone.component';
import {ChildTwoComponent}  from './communication/childtwo.component';


@NgModule({
    declarations: [
      AppComponent,
      hoverDirective,
      strucDirective,
      sqaurePipes,
      greetingPipe,
      androidComponent,
      javaComponent,
      homeComponent,
      javaspringComponent,
      javaswingComponent,
      androidideComponent,
      ParentComponent,
      ChildOneComponent,
      ChildTwoComponent

  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,   
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
