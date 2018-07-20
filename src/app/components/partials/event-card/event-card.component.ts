import { Component, OnInit , Input } from '@angular/core';

export interface Event {
  id:number;
  image: string;
  title: string;
  subtitle: string;
  alt_image: string;
  description:string;
  user_avatar;
}

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
  inputs:['event']
})


export class EventCardComponent implements OnInit {

  @Input() event:Event
  constructor() { }

  ngOnInit() {
  }

  showEvent(){

    
    console.log('onClick')

  }

}
