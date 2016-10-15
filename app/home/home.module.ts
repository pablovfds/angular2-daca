import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';

import { HomeComponent }  from './home.component';

import { HomeService } from './home.service';

@NgModule({
    imports: [ BrowserModule, CommonModule, HttpModule],
    declarations: [ HomeComponent ],
    exports : [HomeComponent],
    providers : [HomeService]
})
export class HomeModule { }