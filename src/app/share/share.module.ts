import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { InputComponent } from "../components/input/input.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent
  ],
  declarations: [InputComponent]
})
export class ShareModule { }
