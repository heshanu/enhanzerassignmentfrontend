import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ChartModule
  ],
  exports: [
    ButtonModule,
    ChartModule
  ]
})
export class PrimengModule { }
