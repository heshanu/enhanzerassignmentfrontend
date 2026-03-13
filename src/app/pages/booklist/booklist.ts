import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListComponent, NzListModule} from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { DatafetchingService } from '../../service/datafetchingService';
import { BookModel } from '../../models/BookModel';
import { CommonModule, DatePipe } from '@angular/common';
import { NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { BookEditModalComponent } from './book-edit-modal.component';
import { Bookservice } from '../../service/bookservice';
@Component({
  selector: 'app-booklist',
  imports: [NzButtonModule, NzListModule, NzSkeletonModule, 
    CommonModule,DatePipe,NzModalModule,FormsModule,ReactiveFormsModule,NzFormModule,NzInputModule,  
  ],
  templateUrl: './booklist.html',
  styleUrl: './booklist.css',
})
export class Booklist implements OnInit,OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  editForm!: FormGroup;
  isEditVisible = false;
  selectedBook!: BookModel;
initLoading = true; 
 count = 5;
  backendUrl = environment.apiUrl;
  loadingMore = false;
  data: BookModel[] = [];
  confirmModal?: NzModalRef;
  updateModal?: NzModalRef;
  datafetchingSubscription!: Subscription;

  constructor(
    private http: HttpClient,
    private msg: NzMessageService,
    private dataService: DatafetchingService,
    private modal: NzModalService,
    private bookState: Bookservice
  ) {}
  
  ngOnDestroy(): void {
   if(this.datafetchingSubscription){
    this.datafetchingSubscription.unsubscribe();
   }  
  }

  formValues!:any;

  ngOnInit(): void {
   this.datafetchingSubscription = this.dataService.getAllBooks().subscribe((books) => { 
      this.data = books;
      this.initLoading = false;
    }); 
    this.formValues = this.bookState.selectedBook$.subscribe(book => {
      if (book) {
        this.formValues = book;
      }
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

edit(item: BookModel): void {
  // ← set initial book in BehaviorSubject
  this.bookState.setBook(item);

  this.modal.create<BookEditModalComponent>({
    nzTitle: 'Edit Book',
    nzContent: BookEditModalComponent,
    nzData: { book: item },
    nzOkText: 'Save',
    nzCancelText: 'Cancel',
    nzOnOk: () => {
      // ← get latest value from BehaviorSubject
      const updatedBook = this.bookState.getBook();
      if (!updatedBook) return false;

      return new Promise((resolve, reject) => {
        this.dataService.updateBook(updatedBook.id, updatedBook).subscribe({
          next: (response) => {
            this.data = this.data.map((b) =>
              b.id === updatedBook.id ? response : b
            );
            this.msg.success('Book updated successfully');
            this.bookState.clearBook();  // ← clear after save
            this.cdr.markForCheck();
            resolve(true);
          },
          error: (err) => {
            console.error('Update failed:', err.status);
            this.msg.error('Failed to update book');
            reject(err);
          }
        });
      });
    },
    nzOnCancel: () => {
      this.bookState.clearBook();  // ← clear on cancel
    }
  });
}


delete(id: number): void {
  this.confirmModal = this.modal.confirm({
    nzTitle: 'Do you want to delete this book?',
    nzContent: 'This action cannot be undone.',
    nzOkDanger: true,
    nzOkText: 'Delete',
    nzCancelText: 'Cancel',
    nzOnOk: () =>
      new Promise((resolve, reject) => {
        this.dataService.deleteBook(id).subscribe({
          next: () => {
            this.data = this.data.filter((book) => book.id !== id);
            this.msg.success('Book deleted successfully');
            resolve(true);
          },
          error: (err) => {
            console.error('Delete failed:', err.status);
            this.msg.error('Failed to delete book');
            reject(err);
          }
        });
      })
  });
}

}
  
