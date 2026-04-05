import { Component, Input } from '@angular/core';
import { NgzorowModule } from '../../shared/ngzorow/ngzorow-module';

@Component({
  selector: 'app-pagination',
  imports: [NgzorowModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  @Input() totalItems: number = 0;
  @Input() pageSize: number = 10;
}
