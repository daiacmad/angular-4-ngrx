import { Routes } from '@angular/router';
import { MultiStepComponent } from "./multi-step.component";

export const MultiStepRoutes: Routes = [
  { path: '', component: MultiStepComponent, pathMatch: 'full' }
];

