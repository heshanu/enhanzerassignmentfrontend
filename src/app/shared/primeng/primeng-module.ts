import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    ChartModule,
    ButtonModule,CardModule
  ],
  exports: [
    ButtonModule,
    ChartModule,ButtonModule,CardModule
  ]
})
export class PrimengModule { }
