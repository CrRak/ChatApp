import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {
  users=[
    {
      "name": "Rakshita",
      "image": "http://emilcarlsson.se/assets/donnapaulsen.png"
    },
    {
      "name": "Prakhar",
      "image": "http://emilcarlsson.se/assets/harveyspecter.png"
    }
  ]
  constructor() { }

  ngOnInit() {
    console.log(this.users);
  }

}
