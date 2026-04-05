import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCardModule,
    NzPaginationModule
  ],
  exports: [
    NzCardModule,NzPaginationModule
  ]
})
export class NgzorowModule { }
