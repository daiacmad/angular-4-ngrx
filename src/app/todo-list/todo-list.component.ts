import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions } from "./todo.actions";
import { Observable } from 'rxjs/Observable';

interface AppState {
  todoList:any;
}


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Observable<any>;
  description:any;


  constructor(private store: Store<AppState>,
    private todoActions:TodoActions) {
    store.subscribe(store =>{
      this.todoList = store.todoList;
    });
   }
 
  ngOnInit() {
  }

  onEnterAddTodo() {
    this.store.dispatch(this.todoActions.addTodo(this.description));
    this.description = "";
  }
}
