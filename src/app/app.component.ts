import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ChatApp';
  constructor(private webSocketService : WebSocketService){
  }

  ngOnInit(){
    this.webSocketService.listen('test service').subscribe((data) => {
      console.log(data);
    })

    jQuery('body').css('overflow-x', 'hidden').css('overflow-y', 'hidden');

  }
}
