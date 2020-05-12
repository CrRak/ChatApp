import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component'

@Component({
  selector:'app-current-user',
  template: `

    <div>


      <img style="border-radius:50px; width:80px; margin:10px;" src="http://emilcarlsson.se/assets/louislitt.png"  />
      <a href="www.google.com" data-toggle="modal" data-target="#myModal"><h4 style="float:right; margin-top:30px;margin-left:30px; color:white"> Mikado Litt</h4></a>

  </div>
  <app-user-profile></app-user-profile>


  `
})
export class CurrentUserComponent{

}
