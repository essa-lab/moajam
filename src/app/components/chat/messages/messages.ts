import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
  standalone: true,
  imports: [
    CommonModule,
  ],
})
export class MessageComponent {
  @Input() data: any;

  constructor() {}

}
