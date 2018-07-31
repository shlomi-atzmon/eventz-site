import { Component, OnInit } from '@angular/core';
import { EventsService, AppEvent } from '../../../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader';
import { environment } from 'environments/environment';

@Component({
  selector: 'event-setting',
  templateUrl: './event-setting.component.html',
  styleUrls: ['./event-setting.component.css'],
  inputs: ['event_id'],
})
export class EventSettingComponent implements OnInit {

  public event:AppEvent;
  public fileToUpload: File  = null;
  public event_id;

  constructor(private service: EventsService,private route: ActivatedRoute) { }
  
  private imageUrl = environment.api_url+"/eventImageUpload"
  ngOnInit() {
   
    if(this.event_id){

      this.service.getEvent( this.event_id )
      .subscribe(response=>{
        
        console.log(8888)
        this.event =response['event'];
      console.log('event-setting' ,this.event)
      
      });

      return true

    }

    this.event = new Event();
    
  }
 

  options: ImageUploaderOptions = {
    thumbnailHeight: 350,
    thumbnailWidth: 350,
    uploadUrl: this.imageUrl,
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  onUpload(file: FileQueueObject) {
    console.log(file.response);
  }


  get eventDisabled(){
      return (this.event && this.event.start_date)
    }

}

class Event implements AppEvent {
  id:any;
  public: boolean;
  disabled:boolean;
  color:string;
  image: string;
  end_date:string;
  start_date:string;
  title: string;
  subtitle: string;
  alt_image: string;
  description:string;
  user_avatar;
}