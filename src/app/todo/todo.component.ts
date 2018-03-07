import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions } from "./todo.actions";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }
  
}
