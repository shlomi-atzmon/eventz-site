import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  inputs: ['food']
})
export class FoodComponent implements OnInit {
  food;
  constructor() { }

  ngOnInit() {
  }

}
