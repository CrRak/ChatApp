import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-search-chat',
  templateUrl: './search-chat.component.html',
  styleUrls: ['./search-chat.component.css']
})
export class SearchChatComponent implements OnInit {
  searchText
  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
  }
  showSearchResults(){
    this.webSocketService.emit("search", this.searchText);

  }

}
