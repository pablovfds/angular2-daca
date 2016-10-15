import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Statistic} from "./model/statistic";

@Injectable()
export class HomeService {
  private statisticUrl = 'http://localhost:8080/statistic';

  statistics : Statistic;

  constructor(private http: Http) { }

  getStatistics() : Observable<Statistic> {
         const headers = new Headers();
          headers.append('Access-Control-Allow-Headers', 'Content-Type');
          headers.append('Access-Control-Allow-Methods', 'GET');
          headers.append('Access-Control-Allow-Origin', '*');

         return this.http.get(this.statisticUrl, {headers: headers})
                         .map(res => <Statistic> res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}