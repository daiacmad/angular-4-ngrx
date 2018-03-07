import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule' },
];
