import { Component, OnInit } from '@angular/core';
import { Spinnerservice } from '../../service/spinnerservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  imports: [CommonModule],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css',
})
export class Spinner implements OnInit {
  isLoading = false;

  constructor(private spinnerService: Spinnerservice) {}

  ngOnInit() {
    this.spinnerService.spinner$.subscribe((status) => {
      this.isLoading = status;
    });
  }

}
