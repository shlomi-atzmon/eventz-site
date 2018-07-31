import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';



export interface AppWhoBrings{
  friend_id:number;
  amount:number;
}
export interface AppEventSupply {
  title: string;
  amount: number;
  confirmed: number;
  who_brings:AppWhoBrings[];
}

export interface AppEventFriend{
    id: number;
    name: string;
    email: string;
    phone: string;
    status:number;
    admin: boolean;
    disabled:boolean;
    color:string;
  
}

export interface AppEvent {
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


@Injectable({
  providedIn: 'root'
})


export class EventsService {
  
  api_url = environment.api_url;
  constructor(private http : HttpClient) { }

  getEvents(){
    
    return this.http.get<AppEvent[]>(this.api_url+'events');
    
  }

  getEvent(id){
   
    return this.http.get<AppEvent>(this.api_url+'events/'+id);
   
  }
  getEventFriends<AppEventFriend>(id){

    return this.http.get(this.api_url+'events/friends/'+id);
  }

  getEventSupplys<AppEventSupply>(id){
    return this.http.get(this.api_url+'events/supplys/'+id);
  }


}

 
  
    

  


