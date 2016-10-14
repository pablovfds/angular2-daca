import { Component, OnInit } from '@angular/core';
import { ProblemsService } from "./problems.service";
import { Problem } from "./model/problem";

@Component({
  moduleId: module.id,
  selector: 'problems-lista',
  templateUrl: 'problems.component.html'
})

export class ProblemsComponent implements OnInit {

  problemsList : Problem[];

  constructor(private problemsService : ProblemsService){
  }
  
  ngOnInit(){
    this.loadProblems()
  }
  
  loadProblems(){
    this.problemsService.getProblems().subscribe(
      problems => this.problemsList = problems,
      err => {
        console.log(err);
      }
    );
  }
}
