import { Component, Input, OnInit } from '@angular/core';
import { PrimengModule } from '../primeng/primeng-module';
import { NgzorowModule } from '../ngzorow/ngzorow-module';

@Component({
  selector: 'app-card',
  imports: [PrimengModule,NgzorowModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  ngOnInit(): void {}

}
