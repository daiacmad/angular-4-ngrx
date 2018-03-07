import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TodoActions } from "../../../todo.actions";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Observable<any>;

  constructor(private store: Store<any>,
    private todoActions:TodoActions) {
    store.subscribe(store =>{
      this.todoList = store.todoList;
    });
   }
  
  ngOnInit() {
  }

  onUpdateStatus(id){
    this.store.dispatch(this.todoActions.updateStatus(id))
  }

  onDeleteTodo(id){
    this.store.dispatch(this.todoActions.deleteTodo(id))
  }
}
