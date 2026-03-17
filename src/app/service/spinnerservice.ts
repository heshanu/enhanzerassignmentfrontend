import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Spinnerservice {
  // default value: false (spinner hidden)
  private spinnerSubject = new BehaviorSubject<boolean>(false);
  
  // Observable to subscribe in components
  spinner$ = this.spinnerSubject.asObservable();

  // Show spinner
  show() {
    this.spinnerSubject.next(true);
  }

  // Hide spinner
  hide() {
    this.spinnerSubject.next(false);
  }
}
