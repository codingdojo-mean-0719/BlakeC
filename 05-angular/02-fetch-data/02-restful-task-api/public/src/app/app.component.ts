import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks Continued';
  tasks = [];
  task = [];
  description: string;

  constructor(private _HTTPSERVICE: HttpService){
  }
  ngOnInit() {
  this.getTasksFromService();
  this.description = 'Learn Angular - Understand Services!';
  }
  getTasksFromService() {
    const observable = this._HTTPSERVICE.getTasks();
    observable.subscribe(data => {
      console.log('Got our Data', data);
      this.tasks = data['tasks'];
    });
  }
}
