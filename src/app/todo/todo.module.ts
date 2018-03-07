import { NgModule } from '@angular/core';
import { ShareModule } from "../share/share.module";
import { RouterModule } from '@angular/router';

//components
import { TodoComponent } from "./todo.component";
//routes
import {TodoRoutes as routes} from "./todo.routes";
import { TodoListPageComponent } from './components/todo-list-page/todo-list-page.component';
import { TodoListComponent } from './components/todo-list-page/todo-list/todo-list.component';
import { TodoAddComponent } from './components/todo-list-page/todo-add/todo-add.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListPageComponent,
    TodoListComponent,
    TodoAddComponent,
  ],
  exports:[
    TodoComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild(routes),
  ]
})
export class TodoModule { }
