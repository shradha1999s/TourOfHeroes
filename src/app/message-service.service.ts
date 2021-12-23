import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  messages: string[] = [];

  addMessages(message:string){
    this.messages.push(message);
  }

  clearMessages(){
    this.messages = [];
  }
}
