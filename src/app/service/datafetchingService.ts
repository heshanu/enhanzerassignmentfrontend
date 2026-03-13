import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/BookModel';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class DatafetchingService {
  constructor(private http:HttpClient) {}

 getAllBooks(): Observable<BookModel[]> {  
  return this.http.get<BookModel[]>(environment.apiUrl);
}

deleteBook(id: number): Observable<void> {
  const headers = new HttpHeaders({ 'Accept': 'application/json' });
  return this.http.delete<void>(`${environment.apiUrl}/${id}`);
}

updateBook(id: number, book: BookModel): Observable<BookModel> {
  return this.http.put<BookModel>(`${environment.apiUrl}/${id}`, book);
}

addBook(book: BookModel): Observable<BookModel> {
  return this.http.post<BookModel>(environment.apiUrl, book);
}

getBookById(id: number): Observable<BookModel> {
  return this.http.get<BookModel>(`${environment.apiUrl}/${id}`); 
}
}