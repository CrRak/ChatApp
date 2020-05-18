import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  // name= "Mikado Litt";
  // imageUrl= "http://emilcarlsson.se/assets/harveyspecter.png";
  // description="I am Litt, I love my owner cum best friend Loius.";
  // emailId="mikadolitt@bagelislove.com";
  constructor() { }
  currentUser
  ngOnInit(){
    this.currentUser= JSON.parse(localStorage.getItem("user"));
  }

}
