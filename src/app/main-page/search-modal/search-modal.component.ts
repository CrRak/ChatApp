import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.css']
})
export class SearchModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
users=[
  {
    "name": "Rakshita",
    "image": "http://emilcarlsson.se/assets/donnapaulsen.png"
  },
  {
    "name": "Prakhar",
    "image": "http://emilcarlsson.se/assets/harveyspectar.png"
  }
]
}
