import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class WebSocketService{
currentUser


    socket : any;
    readonly url: string ="/";

    constructor(){
      this.socket = io(this.url);

    }

    listen(eventName: string){
      return new Observable((subscriber) => {
        this.socket.on(eventName, (data) => {
          subscriber.next(data);
        })
      });
    }

    emit(eventName: string, data: any){
      this.socket.emit(eventName, data);
    }
}
