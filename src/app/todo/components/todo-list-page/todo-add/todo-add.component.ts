import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions } from "../../../todo.actions";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  description:any;

  constructor(private store: Store<any>,
    private todoActions:TodoActions) { }

  ngOnInit() {
  }

  onEnterAddTodo() {
    if(this.description){
      this.store.dispatch(this.todoActions.addTodo(this.description));
      this.description = "";
    }
  }
}
