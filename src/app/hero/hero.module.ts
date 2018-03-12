import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from "../share/share.module";

import {HeroRoutes as routes} from "./hero.routes";

import { HeroListPageComponent } from './components/hero-list-page/hero-list-page.component';
import { HeroListComponent } from './components/hero-list-page/hero-list/hero-list.component';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroListPageComponent,
    HeroListComponent,
  ],
  exports:[
    HeroComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroModule { }
