import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public clickedChat: any;
  constructor() { }

  ngOnInit() {

  }
  childChatClicked(chat){
    this.clickedChat= chat;

  }

}
