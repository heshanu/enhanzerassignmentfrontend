import { Component, Input, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule, NzModalRef } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BookModel } from '../../models/BookModel';
import { DatafetchingService } from '../../service/datafetchingService';
import { Bookservice } from '../../service/bookservice';

@Component({
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzButtonModule
  ],
  template: `
<form nz-form [formGroup]="form" nzLayout="vertical">
   <nz-form-item>
    <nz-form-label nzRequired>Id</nz-form-label>
    <nz-form-control nzErrorTip="Title is required">
      <input nz-input formControlName="id" />
    </nz-form-control>
  </nz-form-item>
  <nz-form-item>
    <nz-form-label nzRequired>Title</nz-form-label>
    <nz-form-control nzErrorTip="Title is required">
      <input nz-input formControlName="title" />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-label nzRequired>Author</nz-form-label>
    <nz-form-control nzErrorTip="Author is required">
      <input nz-input formControlName="author" />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-label nzRequired>ISBN</nz-form-label>
    <nz-form-control nzErrorTip="ISBN is required">
      <input nz-input formControlName="isbn" />
    </nz-form-control>
  </nz-form-item>

  <nz-form-item>
    <nz-form-label nzRequired>Publication Date</nz-form-label>
    <nz-form-control nzErrorTip="Date is required">
        <input nz-input formControlName="publicationDate" />
    </nz-form-control>
  </nz-form-item>

  <button nz-button nzType="primary" (click)="update()">Save</button>
  <button nz-button nzType="default" (click)="cancel()">Cancel</button>
</form>
  `
})
export class BookEditModalComponent implements OnInit {
  constructor(private bookService:Bookservice) {}

  private fb = inject(FormBuilder);
  private modalRef = inject(NzModalRef);

  @Input() book!: BookModel;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      publicationDate: [null, Validators.required],
    });

    if (this.book) {
      this.form.patchValue(this.book);
    }
  }

  update() {
    if (this.form.valid) {
     this.bookService.setBook(this.form.value);
     console.log("this is book: " + JSON.stringify(this.bookService.getBook()));
    }
  }

  cancel() {
    this.modalRef.destroy();
  }
}