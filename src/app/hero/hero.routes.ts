import { Routes } from '@angular/router';
import { HeroComponent } from "./hero.component";

export const HeroRoutes: Routes = [
  { path: '', component: HeroComponent, pathMatch: 'full' }
];

