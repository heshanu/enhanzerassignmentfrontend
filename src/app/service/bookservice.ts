import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {
  private selectedBook = new BehaviorSubject<BookModel | null>(null);
  selectedBook$ = this.selectedBook.asObservable();

  setBook(book: BookModel): void {
    this.selectedBook.next(book); 
  }

  getBook(): BookModel | null {
    return this.selectedBook.getValue();
  }

  clearBook(): void {
    this.selectedBook.next(null);
  }
  
}