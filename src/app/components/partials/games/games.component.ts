import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  inputs: ['games']
})
export class GamesComponent implements OnInit {
  games;
  constructor() { }

  ngOnInit() {
  }

}
