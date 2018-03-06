import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';

//reduvers
import { reducers } from './app.reducers';

//action
import { TodoActions } from "./todo-list/todo.actions";


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [TodoActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
