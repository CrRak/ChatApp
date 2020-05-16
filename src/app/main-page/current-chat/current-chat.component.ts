import { Component, OnInit, Input } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-current-chat',
  templateUrl: './current-chat.component.html',
  styleUrls: ['./current-chat.component.css']
})
export class CurrentChatComponent implements OnInit {
  @Input() chat;
  messageText
  currentUser
  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.currentUser= JSON.parse(localStorage.getItem("user"));
  }
  sendMessage(){
    this.webSocketService.emit("message", {
      fromId: this.currentUser._id,
      toId: "user2",
      message: this.messageText
    })
    this.messageText=''


  }

  msgs: any=[
    {"status":"sent",
    "message":"How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!",
    "imageUrl":"http://emilcarlsson.se/assets/mikeross.png"},
    {"status":"replies",
    "message":"When you're backed against the wall, break the god damn thing down.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"replies",
    "message":"Excuses don't win championships.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"sent",
    "message":"Oh yeah, did Michael Jordan tell you that?",
    "imageUrl":"http://emilcarlsson.se/assets/mikeross.png"},
    {"status":"replies",
    "message":"No, I told him that.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"replies",
    "message":"What are your choices when someone puts a gun to your head?",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"sent",
    "message":"What are you talking about? You do what they say or they shoot you.",
    "imageUrl":"http://emilcarlsson.se/assets/mikeross.png"},
    {"status":"replies",
    "message":"Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"replies",
    "message":"Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"replies",
    "message":"Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"replies",
    "message":"Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"replies",
    "message":"Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    {"status":"replies",
    "message":"Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
    "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"}
  ]

}
