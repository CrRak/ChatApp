import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @Output() chatClicked  = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  chats=[
    // {
    //   'id':1,
    //   'name':'Louis Litt',
    //   'message':'You just got litt up',
    //   'imageUrl':'http://emilcarlsson.se/assets/louislitt.png'
    // },
    // { 'id':2,
    //   'name':'Tom Spectar',
    //   'message':'Meow meow',
    //   'imageUrl':'http://emilcarlsson.se/assets/harveyspecter.png'
    // },
    // { 'id':3,
    //   'name':'Donna Paulsen',
    //   'message':'I am too busy being awesome',
    //   'imageUrl':'http://emilcarlsson.se/assets/donnapaulsen.png'
    // },
    // { 'id':4,
    //   'name':'Rachel Zane',
    //   'message':'Louis, loot at this!',
    //   'imageUrl':'http://emilcarlsson.se/assets/rachelzane.png'
    // },
    // { 'id':5,
    //   'name':'Jessica Pearson',
    //   'message':'In my cabin, now!',
    //   'imageUrl':'http://emilcarlsson.se/assets/jessicapearson.png'
    // },
    // { 'id':6,
    //   'name':'Kartrina Bennet',
    //   'message':'here are the files you wanted',
    //   'imageUrl':'http://emilcarlsson.se/assets/katrinabennett.png'
    // }

  ]

  openThisChat(chat){
    this.chatClicked.emit(chat);

  }
}
