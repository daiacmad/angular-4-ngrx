import { NgModule } from '@angular/core';
import { ShareModule } from "../share/share.module";
import { RouterModule } from '@angular/router';

//routes
import {MultiStepRoutes as routes} from "./multi-step.routes";

import { MultiStepComponent } from './multi-step.component';
import { StepComponent } from './step/step.component';
import { PurchaseOptionComponent } from './purchase-option/purchase-option.component';
import { ConfigureComponent } from './configure/configure.component';
import { DetailComponent } from './detail/detail.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [MultiStepComponent,StepComponent, PurchaseOptionComponent, ConfigureComponent, DetailComponent, SummaryComponent],
  exports:[
    MultiStepComponent
  ],
  imports: [
    ShareModule,
    RouterModule.forChild(routes),
  ]
})
export class MultiStepModule { }
