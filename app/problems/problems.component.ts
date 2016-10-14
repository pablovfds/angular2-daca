import { Component } from '@angular/core';
import { ProblemsService } from "./problems.service";
import { Problems } from "./problem";

@Component({
  moduleId: module.id,
  selector: 'problems-lista',
  templateUrl: 'problems.component.html'
})

export class ProblemsComponent {
  nome = 'Pablo';

  problems : Problem[];

  constructor(problemsService : ProblemsService){
    this.problems = problemsService.getProblems();
  }
}
