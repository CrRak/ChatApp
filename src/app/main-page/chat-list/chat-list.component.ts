import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

declare var jQuery: any;

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit,OnChanges {
  currentUser
  @Output() chatClicked  = new EventEmitter<any>();
  @Input() searchedUser;
  chats=[];
  previousSearchedUser;
  gotArray = false;
  constructor(private webSocketService: WebSocketService) {
    this.currentUser= JSON.parse(localStorage.getItem("user"));
    this.webSocketService.emit("init",{userId: this.currentUser._id});
    this.webSocketService.listen("chatList").subscribe((dataArray:any) => {
        console.log(dataArray);
     if(!this.gotArray) {
        dataArray.forEach((data: any) => {
          this.chats.push({
            "id": this.currentUser._id==data.user1ID?data.user2ID:data.user1ID,
            "name": this.currentUser._id==data.user1ID?data.user2Name:data.user1Name,
            "messages": data.messages,
            "imageUrl": "http://emilcarlsson.se/assets/mikeross.png"
          })
        });
        this.gotArray = true;
      }
    });
   }

  ngOnInit() {

  }

  ngOnChanges(){

    console.log(this.searchedUser)

    let exists = false;
    this.chats.forEach((chat) => {
      if(chat.id == this.searchedUser._id)
      {
        this.openThisChat(chat);
        exists = true;
      }
    })

    if(this.searchedUser!=null && !exists){
      if(this.searchedUser != this.previousSearchedUser){
        this.chats.push({
          "id": this.searchedUser._id,
        "name": this.searchedUser.name,
        "messages": [],
        "imageUrl": this.searchedUser.image,
        });
        this.previousSearchedUser = this.searchedUser;
      }
    }

    jQuery('.modal').modal('hide');
    // var modal = document.getElementById("dismissModal");
    // modal.click();

  }

  openThisChat(chat){
    this.chatClicked.emit(chat);

  }
}
