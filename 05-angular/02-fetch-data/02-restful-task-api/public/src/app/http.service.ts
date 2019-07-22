import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _HTTP: HttpClient) {
    // this.getTasks();
  }
  getTasks(): Observable<Task[]> {
    // // our http response is an Observable, store it in a variable
    // const tempObservable = this._HTTP.get('/tasks');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
    return this._HTTP.get<Task[]>('/tasks');
  }
}
