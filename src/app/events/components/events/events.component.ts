import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})


export class EventsComponent implements OnInit {
  
  public events:any[]; 

  constructor(private eventService: EventsService) {}

  ngOnInit(){

    this.eventService.getEvents().subscribe(response =>{

        this.events = response['events']
    })
    
  }
 

}
