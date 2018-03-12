import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadChildren: './hero/hero.module#HeroModule' },
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoModule' },
  {
    path: 'multi-step',
    loadChildren: './multi-step/multi-step.module#MultiStepModule' },
  { path: "**", redirectTo: '/'  },
];
