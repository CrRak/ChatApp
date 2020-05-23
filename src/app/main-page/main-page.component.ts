import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public clickedChat: any;
  public clickedUser:any;
  constructor() { }

  ngOnInit() {

  }
  childChatClicked(chat){
    this.clickedChat= chat;

  }
  childSearchChatClicked(user){
    this.clickedUser=user;
  }

}
