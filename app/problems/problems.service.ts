import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Problem} from "./model/problem";

@Injectable()
export class ProblemsService {
  private problemsUrl = 'http://192.168.130.248:8080/problem?page=1&size=100&sort=date';

  problems : Problem[];

  constructor(private http: Http) { }

  getProblems() : Observable<Problem[]> {
         const headers = new Headers();
          headers.append('Access-Control-Allow-Headers', 'Content-Type');
          headers.append('Access-Control-Allow-Methods', 'GET');
          headers.append('Access-Control-Allow-Origin', '*');
       
         // ...using get request
         return this.http.get(this.problemsUrl, {headers: headers})
                        // ...and calling .json() on the response to return data
                         .map(res => <Problem[]> res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}
