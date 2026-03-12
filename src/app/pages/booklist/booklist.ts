import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListComponent, NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import e from 'express';
import { environment } from '../../../environments/environment.development';
import { DatafetchingService } from '../../service/datafetchingService';
import { BookModel } from '../../models/BookModel';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-booklist',
  imports: [NzButtonModule, NzListModule, NzSkeletonModule, 
    CommonModule,DatePipe,],
  templateUrl: './booklist.html',
  styleUrl: './booklist.css',
})
export class Booklist implements OnInit,OnDestroy {
initLoading = true; 
 count = 5;
  backendUrl = environment.apiUrl;
  loadingMore = false;
  data: BookModel[] = [];
  datafetchingSubscription!: Subscription;
  constructor(
    private http: HttpClient,
    private msg: NzMessageService,
    private dataService: DatafetchingService
  ) {}
  ngOnDestroy(): void {
   if(this.datafetchingSubscription){
    this.datafetchingSubscription.unsubscribe();
   }  
  }

  ngOnInit(): void {
   this.datafetchingSubscription = this.dataService.getAllBooks().subscribe((books) => { 
      this.data = books;
      this.initLoading = false;
    }); 
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.http
      .get(this.backendUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => {
        this.data = this.data.concat(res.results);
        this.loadingMore = false;
      });
  }

  edit(item: any): void {
  //  this.msg.success(item.email);
  }

  delete(item: any): void {
    this.dataService.deleteBook(item.id).subscribe(() => {
      this.data = this.data.filter((d) => d.id !== item.id);
      this.msg.success('Book deleted successfully');
    });
    this.msg.error(item.email);
  }
}
