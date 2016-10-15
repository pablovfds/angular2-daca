import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {APP_BASE_HREF} from '@angular/common';
import { ProblemsModule } from "./problems/problems.module";
import { AppComponent }  from './app.component';
import { routing } from './app.routes';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [ BrowserModule, ProblemsModule, routing, HomeModule],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule { }
