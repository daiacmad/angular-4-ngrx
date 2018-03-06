import { combineReducers, ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as fromTodo from "./todo-list/todo.reducer";

export const reducers: ActionReducerMap<any> = {
    todoList: fromTodo.reducer,
  };