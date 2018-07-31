import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})


export class EventComponent implements OnInit {

  public event;
  public id;
  constructor(public service: EventsService, private route: ActivatedRoute) {}

   ngOnInit() {
    
    this.route.paramMap.subscribe(parmas => {
      if(parmas.has('event_id')){
        this.id = parmas.get('event_id')
      }
    });

    this.event =  this.service.getEvent( this.id )

  }

}


