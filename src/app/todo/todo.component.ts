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

  todoList: Observable<any>;
  description:any;


  constructor(private store: Store<any>,
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
