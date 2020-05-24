

import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';


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
  selectedFile = null;
  constructor(private webSocketService: WebSocketService) { }
  currentUser
  ngOnInit(){
    this.currentUser= JSON.parse(localStorage.getItem("user"));
    this.webSocketService.listen("imageListener").subscribe((data) => {
      this.currentUser.image= data;
      localStorage.setItem("user",JSON.stringify(this.currentUser));
      console.log(data);
    })
  }
  async onSelectedFile(event){
    this.selectedFile= event.target.files[0];
    console.log(this.selectedFile);
    this.webSocketService.emit("uploadedImage", {userId: this.currentUser._id, image:  await this.toBase64(this.selectedFile)});
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


}
