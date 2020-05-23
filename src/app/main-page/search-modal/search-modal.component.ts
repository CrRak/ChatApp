import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';


@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {
  users: any=[

  ]
  @Output() searchChat  = new EventEmitter<any>();
  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    this.webSocketService.listen("searchResults").subscribe((dataArray:any) => {
      this.users = dataArray;
    })
  }
  startConversation(user){
    this.searchChat.emit(user);
  }

}
