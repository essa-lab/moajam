import { Component } from '@angular/core';
import { MessageInputComponent } from '../message-input/message-input';
import { CommonModule } from '@angular/common';
import { MoajamService } from '../../services/moajam.service';
import { HttpClientModule } from '@angular/common/http';
import { OptionsComponent } from '../options/options';
import rootJson from './root.json';
import noun from './noun.json';
import verb from './verb.json';
import meaning from './meaning.json';
import era from './era.json';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
  standalone: true,
  imports: [
    CommonModule,
    MessageInputComponent,
    HttpClientModule,
    OptionsComponent,
  ],
})
export class ChatComponent {
  root: string = '';
  word: string = '';
  era: string = '';
  isBotTyping: boolean = false;
  actionsMap : { [key: string]: () => Observable<any> } = {
    getRoot: () => this.service.getRoot(this.root),
    getNouns: () => this.service.getRootNoun(this.root),
    getVerbs: () => this.service.getRootVerb(this.root),
    getGeneralInfo: () => this.service.getRootInformation(this.root),
    getMeaning: () => this.service.getWordMeaning(this.word),
    getEra: () => this.service.getWordCitations(this.word, this.era),
    getSentence: () => this.service.getWordSentence(this.word),
  };

  constructor(protected service: MoajamService) {}

  messages  : { user: string; text: string | any; isMe: boolean }[] = [
    { user: 'ChatBot', text: 'Hello!', isMe: false },
    // { user: 'Me', text: 'Hi !', isMe: true },
  ];

  answers : any ={}

  getActionsMap() {
  return {
    getRoot: () => this.service.getRoot(this.root),
    getNouns: () => this.service.getRootNoun(this.root),
    getVerbs: () => this.service.getRootVerb(this.root),
    getGeneralInfo: () => this.service.getRootInformation(this.root),
    getMeaning: () => this.service.getWordMeaning(this.word),
    getEra: () => this.service.getWordCitations(this.word, this.era),
    getSentence: () => this.service.getWordSentence(this.word),
  };
}

  onSendMessage(event: { message: string; isUser: boolean }) {
    this.isBotTyping = true;
    if (event.isUser) {
      this.messages.push({
        user: 'Me',
        text: event.message,
        isMe: event.isUser,
      });
    }
    if (
      !event.message.match(/^([\u0600-\u06FF]\s)*[\u0600-\u06FF]$/) &&
      !event.isUser
    ) {
      this.messages.push({
        user: 'ChatBot',
        text: event.message,
        isMe: event.isUser,
      });
      return;
    }
    this.root = event.message;

    const apiCall = this.actionsMap['getRoot'];
    
    if (apiCall) {
      apiCall().subscribe(
        (response) => {
          console.log(rootJson);
        },
        (error) => {
          // for testing add a static message
        this.messages.push({
        user: 'ChatBot',
        text: rootJson,
        isMe: false,
      });        }
      );
    }
    this.isBotTyping = false;
    // this.service.getRoot('ك ت ب').subscribe(res=>{
    //   console.log(res)
    // })
  }

  onSelectOption(option:any) {
    this.isBotTyping = true;
  
    const apiCall = this.actionsMap[option];

    if (apiCall) {
      apiCall().subscribe(
        (response) => {
          console.log(rootJson);
        },
        (error) => {
          // for testing add a static message
        this.messages.push({
        user: 'ChatBot',
        text: verb,
        isMe: false,
      });      
          this.isBotTyping = false;

      }
      );
    }
    // this.service.getRoot('ك ت ب').subscribe(res=>{
    //   console.log(res)
    // })
  }
}
