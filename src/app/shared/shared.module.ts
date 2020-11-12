import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormErrorsComponent } from './form-errors/form-errors.component';



@NgModule({
  declarations: [InputComponent, FormErrorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    FormErrorsComponent
  ]
})
export class SharedModule { }
