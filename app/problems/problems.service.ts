import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Problem} from "./problem";

@Injectable()
export class ProblemsService {
  private problemsUrl = 'http://localhost:8080/problem?page=1&size=100&sort=date';

  problems : Problem[];

  constructor(private http: Http) { }

  getProblems() : Promise<Problem[]> {
    return this.http.get(this.problemsUrl)
              .toPromise()
              .then(response => response.json().data as Problem[])
              .catch(this.handleError);
  }
}
