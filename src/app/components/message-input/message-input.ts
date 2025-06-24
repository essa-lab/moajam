import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.html',
  imports: [CommonModule, FormsModule],
})
export class MessageInputComponent {
  @Output() sendMessage = new EventEmitter<{message:string,isUser:boolean}>();
  message: string = '';

  send() {
    
    this.message = this.message?.trim().replace(/\s+/g, ' ');

    if (!this.message.match(/^([\u0600-\u06FF]\s)*[\u0600-\u06FF]$/)) {
      this.sendMessage.emit({ message: this.message, isUser: true });
      this.sendMessage.emit(
        {message:'Invalid format. Please enter Arabic letters separated by a space.',isUser:false}
      );
    } else {
      this.sendMessage.emit({ message: this.message, isUser: true });
    }

  }
  
}
