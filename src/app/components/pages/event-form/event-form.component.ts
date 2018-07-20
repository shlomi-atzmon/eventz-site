import { Component, OnInit } from '@angular/core';
import { EventsService, Event } from '../../../services/events.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})

export class EventFormComponent implements OnInit {

  public event;
  public fileToUpload: File  = null;
  public id;
 
  constructor(private service: EventsService,private route: ActivatedRoute ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(parmas => {
      if(parmas.has('event_id')){
        this.id = parmas.get('event_id')
      }
    });

    this.event =  this.service.getEvent( this.id )
  }

  handleFileInput(event: any) {

    let files = event.target.files;
    let fileItem = files.item(0);
    console.log("file input has changed. The file is", fileItem)
    this.fileToUpload = fileItem
   
  }




}