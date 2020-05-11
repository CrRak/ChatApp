import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chats=[
    {
      'name':'Louis Litt',
      'message':'You just got litt up',
      'imageUrl':'http://emilcarlsson.se/assets/louislitt.png'
    },
    {
      'name':'Tom Spectar',
      'message':'Meow meow',
      'imageUrl':'http://emilcarlsson.se/assets/louislitt.png'
    },
    {
      'name':'Donna Paulsen',
      'message':'I am too busy being awesome',
      'imageUrl':'http://emilcarlsson.se/assets/louislitt.png'
    },
    {
      'name':'Rachel Zane',
      'message':'Louis, loot at this!',
      'imageUrl':'http://emilcarlsson.se/assets/louislitt.png'
    },
    {
      'name':'Jessica Pearson',
      'message':'In my cabin, now!',
      'imageUrl':'http://emilcarlsson.se/assets/louislitt.png'
    },
    {
      'name':'Kartrina Bennet',
      'message':'here are the files you wanted',
      'imageUrl':'http://emilcarlsson.se/assets/louislitt.png'
    }

  ]
}
