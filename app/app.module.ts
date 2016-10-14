import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProblemsModule } from "./problems/problems.module";

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, ProblemsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
