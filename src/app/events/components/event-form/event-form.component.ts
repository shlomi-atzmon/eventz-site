import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})

export class EventFormComponent implements OnInit {

 
 public event_id;
  constructor(private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(parmas => {
      if(parmas.has('event_id')){
        this.event_id = parmas.get('event_id')
      }
    });
  }



}