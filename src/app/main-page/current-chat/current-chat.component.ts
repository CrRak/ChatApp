import { Component, OnInit,OnChanges, Input, AfterViewChecked } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-current-chat',
  templateUrl: './current-chat.component.html',
  styleUrls: ['./current-chat.component.css']
})
export class CurrentChatComponent implements OnInit,OnChanges {
  @Input() chat;
  messageText
  currentUser

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.currentUser= JSON.parse(localStorage.getItem("user"));
    this.webSocketService.emit("init",{userId: this.currentUser._id});
    this.webSocketService.listen("message").subscribe((data:any) => {
      this.msgs.push({
        "status":"received",
        "message": data.message,
        "imageUrl": data.imageUrl==null?"http://emilcarlsson.se/assets/mikeross.png":data.imageUrl,
      })
      this.chat.messages.push({
        "senderId":this.currentUser._id,
        "timestamp":new Date(),
        "content": data.message,
      })
    });
    var input = document.getElementById("msgText");
    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("sendMsg").click();
      }
    });

  }
  ngOnChanges(){
    console.log(this.chat);

    if(this.chat){
      this.msgs = [];
      this.chat.messages.forEach((message) => {
      this.msgs.push({
        "status": this.currentUser._id == message.senderId ? "sent" : "received",
        "message": message.content,
        "imageUrl": this.currentUser._id == message.senderId ? (this.currentUser.image==null?"http://emilcarlsson.se/assets/harveyspecter.png":this.currentUser.image) : (this.chat.imageUrl==null?"http://emilcarlsson.se/assets/mikeross.png":this.chat.imageUrl),
    });
  })
  }

  }

  ngAfterViewChecked(){
    let container = document.getElementById("messageContainer");
    console.log("container")
    container.scrollTop = container.scrollHeight;
  }
  sendMessage(){
    if(this.chat){
    this.webSocketService.emit("message", {
      fromUserName: this.currentUser.name,
      fromUserImage: this.currentUser.image,
      toUserName: this.chat.name,
      toUserImage: this.chat.imageUrl,
      fromUserId: this.currentUser._id,
      toUserId: this.chat.id,
      message: this.messageText
    })
    this.msgs.push({
      "status":"sent",
      "message": this.messageText,
      "imageUrl": this.currentUser.image==null?"http://emilcarlsson.se/assets/harveyspecter.png":this.currentUser.image,
    })

    this.chat.messages.push({
      "senderId":this.currentUser._id,
      "timestamp":new Date(),
      "content": this.messageText,
    })
    this.messageText=''
  }

  }

  msgs: any=[
    // {"status":"received",
    // "message":"How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!",
    // "imageUrl":"http://emilcarlsson.se/assets/mikeross.png"},
    // {"status":"sent",
    // "message":"When you're backed against the wall, break the god damn thing down.",
    // "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    // {"status":"sent",
    // "message":"Excuses don't win championships.",
    // "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    // {"status":"received",
    // "message":"Oh yeah, did Michael Jordan tell you that?",
    // "imageUrl":"http://emilcarlsson.se/assets/mikeross.png"},
    // {"status":"sent",
    // "message":"No, I told him that.",
    // "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    // {"status":"sent",
    // "message":"What are your choices when someone puts a gun to your head?",
    // "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},
    // {"status":"received",
    // "message":"What are you talking about? You do what they say or they shoot you.",
    // "imageUrl":"http://emilcarlsson.se/assets/mikeross.png"},
    // {"status":"sent",
    // "message":"Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.",
    // "imageUrl":"http://emilcarlsson.se/assets/harveyspecter.png"},


  ]

}
