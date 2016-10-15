import { Component, OnInit } from '@angular/core';

import { HomeService } from "./home.service";
import { Statistic } from "./model/statistic";

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  resolvedProblems : number = 0;  
  usersSubmittingProblems : number = 0;
  userResolvedProblems : number = 0;

  constructor(private homeService: HomeService){
  }

  ngOnInit(){
    this.loadStatistics()
  }

  loadStatistics(){
    this.homeService.getStatistics().subscribe(
      statistics => {
        this.resolvedProblems = statistics.resolvedProblems
        this.usersSubmittingProblems = statistics.usersSubmittingProblems
        this.userResolvedProblems = statistics.userResolvedProblems
      },
      err => {
        console.log(err);
      }
    );
  }
}