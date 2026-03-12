import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import e from 'express';
import { environment } from '../../../environments/environment.development';
import { Booklist } from "../booklist/booklist";
@Component({
  selector: 'app-welcome',
  imports: [NzButtonModule, NzListModule, NzSkeletonModule, Booklist],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {}
