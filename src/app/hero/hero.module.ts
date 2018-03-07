import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListPageComponent } from './components/hero-list-page/hero-list-page.component';
import { HeroListComponent } from './components/hero-list-page/hero-list/hero-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroListPageComponent, HeroListComponent]
})
export class HeroModule { }
