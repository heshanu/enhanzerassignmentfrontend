import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { Spinnerservice } from '../../service/spinnerservice';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, OnDestroy{
  isLoading = false;
  constructor(private spinnerService:Spinnerservice) { 

  }
  ngOnInit(): void {
    this.spinnerService.spinner$.subscribe((status) => {
      this.isLoading = status;
    });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

 private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  submitForm(): void {
      this.spinnerService.show(); // Show spinner on form submission
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    this.spinnerService.hide(); // Hide spinner after processing
  }

}
