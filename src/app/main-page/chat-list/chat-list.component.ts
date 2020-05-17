import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';


@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  currentUser
  @Output() chatClicked  = new EventEmitter<any>();
  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.currentUser= JSON.parse(localStorage.getItem("user"));
    this.webSocketService.emit("init",{userId: this.currentUser._id});
    this.webSocketService.listen("chatList").subscribe((dataArray:any) => {

    dataArray.forEach((data: any) => {
      this.chats.push({
        "id": this.currentUser._id==data.user1ID?data.user2ID:data.user1ID,
        "name": this.currentUser._id==data.user1ID?data.user2Name:data.user1Name,
        "messages": data.messages,
        "imageUrl": "http://emilcarlsson.se/assets/mikeross.png"
      })
    });
    })
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
