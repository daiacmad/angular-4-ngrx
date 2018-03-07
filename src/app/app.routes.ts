import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadChildren: './todo/todo.module#TodoModule' },
];
