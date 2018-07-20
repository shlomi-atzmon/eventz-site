import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { EventsService } from '../../../services/events.service';




@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent  {
  
  events: any[]; 

  constructor( service: EventsService) {
  
    this.events = service.getEvents();


  }

 

}
