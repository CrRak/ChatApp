import { Component } from '@angular/core';


@Component({
  selector:'app-current-user',
  template: `
    <div>
      <img style="border-radius:50px; width:80px; margin:10px;  " src="http://emilcarlsson.se/assets/louislitt.png"  />
      <h4 style="float:right; margin-top:30px;margin-left:30px; color:white"> Mikado Litt</h4>
    </div>


  `
})
export class CurrentUserComponent{

}
