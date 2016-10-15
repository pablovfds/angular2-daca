import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Problem} from "./model/problem";

@Injectable()
export class ProblemsService {
  private problemsUrl = 'http://localhost:8080/problem?page=&size=100&sort=date';

  problems : Problem[];

  constructor(private http: Http) { }

  getProblems() : Observable<Problem[]> {
         const headers = new Headers();
          headers.append('Access-Control-Allow-Headers', 'Content-Type');
          headers.append('Access-Control-Allow-Methods', 'GET');
          headers.append('Access-Control-Allow-Origin', '*');

         return this.http.get(this.problemsUrl, {headers: headers})
                         .map(res => <Problem[]> res.json().content)
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}
