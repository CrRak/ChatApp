import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component'

@Component({
  selector:'app-current-user',
  template: `
    <div>
      <img style="border-radius:50px; width:80px; margin:10px;" *ngIf="currentUser.image" [src]="currentUser.image"  />
      <img style="border-radius:50px; width:80px; margin:10px;" *ngIf="!currentUser.image" src="http://emilcarlsson.se/assets/louislitt.png"  />
      <h4 style="float:right; margin-top:30px;margin-left:30px; color:white"> {{currentUser.name}}</h4>
  </div>
  `
})
export class CurrentUserComponent implements OnInit{
  currentUser
  ngOnInit(){
    this.currentUser= JSON.parse(localStorage.getItem("user"));

  }
}
