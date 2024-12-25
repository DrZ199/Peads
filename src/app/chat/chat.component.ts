import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  template: `<div class="chat-box">
               <div class="messages" *ngFor="let message of chatHistory">
                 <div>{{ message }}</div>
               </div>
               <input [(ngModel)]="userInput" (keydown.enter)="sendMessage()" placeholder="Type a message..."/>
             </div>`,
  styles: [`
    .chat-box { max-height: 400px; overflow-y: auto; }
    .messages { padding: 10px; }
    input { width: 100%; }
  `]
})
export class ChatComponent {
  chatHistory: string[] = [];
  userInput: string = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {
    if (this.userInput.trim()) {
      this.chatHistory.push(`You: ${this.userInput}`);
      this.chatService.sendMessage(this.userInput).subscribe(response => {
        this.chatHistory.push(`Bot: ${response}`);
        this.userInput = '';
      });
    }
  }
}
