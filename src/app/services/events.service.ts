import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';




export interface WhoBrings{
  friend_id:number;
  amount:number;
}
export interface EventSupply {
  title: string;
  amount: number;
  confirmed: number;
  who_brings:WhoBrings[];
}

export interface EventFriend{
    id: number;
    name: string;
    email: string;
    phone: string;
    status:number;
    admin: boolean;
    disabled:boolean;
    color:string;
  
}

export interface Event {
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
  friends:EventFriend[];
  supplys:EventSupply[];
}


@Injectable({
  providedIn: 'root'
})



export class EventsService {
  
  event:Event
  events: Event[];

  constructor(private http : HttpClient) { }

  getEvents(){

    return [
      {
          id:1,
          "public":false,
          "image":"https://media.istockphoto.com/photos/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-picture-id513550806",
          "title":"טבריה 2018",
          "subtitle":"כל החברה",
          "start_date":"",
          "end_date":"",
          "alt_image":"תמונת קבוצה",
          "description":"המסורת שלנו יוצאת לדרך",
          "user_avatar":"https://material.angular.io/assets/img/examples/shiba1.jpg",
          "friends":[
              {"name":"אייל פישר","email":"phisher@gmail.com","phone":"0501234567","status":0,"admin":false},
              {"name":"תום קלמינסקי","email":"tom@gmail.com","phone":"0501234567","status":1,"admin":false},
              {"name":"שלומי עצמון","email":"shlomi@gmail.com","phone":"0501234567","status":1,"admin":false},
              {"name":"גונן שלג","email":"gonen@gmail.com","phone":"0501234567","status":1,"admin":true}
          ]
      },
      {
        id:2,
          "public":true,
          "image":"https://media.istockphoto.com/photos/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-picture-id513550806",
          "title":"טבריה 2018",
          "subtitle":"כל החברה",
          "alt_image":"תמונת קבוצה",
          "start_date":"",
          "end_date":"",
          "description":"המסורת שלנו יוצאת לדרך",
          "user_avatar":"https://material.angular.io/assets/img/examples/shiba1.jpg",
          "friends":[
            {"name":"אייל פישר","email":"phisher@gmail.com","phone":"0501234567","status":0,"admin":false},
            {"name":"תום קלמינסקי","email":"tom@gmail.com","phone":"0501234567","status":1,"admin":false},
            {"name":"שלומי עצמון","email":"shlomi@gmail.com","phone":"0501234567","status":1,"admin":false},
            {"name":"גונן שלג","email":"gonen@gmail.com","phone":"0501234567","status":1,"admin":false}
          ]
              
      },
      {
          id:3,
          "public":true,
          "image":"https://media.istockphoto.com/photos/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-picture-id513550806",
          "title":"טבריה 2018",
          "subtitle":"כל החברה",
          "start_date":"",
          "end_date":"",
          "alt_image":"תמונת קבוצה",
          "description":"המסורת שלנו יוצאת לדרך",
          "user_avatar":"https://material.angular.io/assets/img/examples/shiba1.jpg",
          "friends":[
            {"name":"אייל פישר","email":"phisher@gmail.com","phone":"0501234567","status":0,"admin":false},
            {"name":"תום קלמינסקי","email":"tom@gmail.com","phone":"0501234567","status":1,"admin":false},
            {"name":"שלומי עצמון","email":"shlomi@gmail.com","phone":"0501234567","status":1,"admin":false},
            {"name":"גונן שלג","email":"gonen@gmail.com","phone":"0501234567","status":1,"admin":false}
          ]
      }
  ];


  }

  getEvent(id){
   
    if(typeof id == 'undefined'){
    
      return {
        id:null,
        public: false,
        image: "",
        end_date:"",
        start_date:"",
        title: "",
        subtitle: "",
        alt_image: "",
        description:"",
        user_avatar:"",
       
        "friends":[],
        "supplys":[]
      }
    }

    return {
      id:1,
      public: true,
      image: "https://media.istockphoto.com/photos/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-picture-id513550806",
      end_date:"10-01-2018",
      start_date:"10-01-2018",
      title: "טבריה 2018",
      subtitle: "כל החברה",
      alt_image: "תמונת קבוצה",
      description:"המסורת שלנו יוצאת לדרך",
      user_avatar:"https://material.angular.io/assets/img/examples/shiba1.jpg",
     
      "friends":[
        {id:1,"name":"אייל פישר","email":"phisher@gmail.com","phone":"0501234567","status":0,"admin":true},
        {id:2,"name":"תום קלמינסקי","email":"tom@gmail.com","phone":"0501234567","status":1,"admin":false},
        {id:3,"name":"שלומי עצמון","email":"shlomi@gmail.com","phone":"0501234567","status":1,"admin":false},
        {id:4,"name":"גונן שלג","email":"gonen@gmail.com","phone":"0501234567","status":1,"admin":true}
      ],
      "supplys":[
        {
          title: "שמשיה", 
          amount: 5, 
          confirmed: 3,
          Who_brings:[
            {'friend_id':1,"amount":2 } ,
            {'friend_id':2,"amount":1 } 
          ]
        },
        {
          title: "כיסא", 
          amount: 9, 
          confirmed: 5,
          Who_brings:[
            {'friend_id':1,"amount":2 } ,
            {'friend_id':3,"amount":3 } ,
            {'friend_id':2,"amount":1 } 
          ]},
        {
           title: "מאוורר",
           amount: 8, 
           confirmed: 6,
           Who_brings:[
            {'friend_id':4,"amount":5 } ,
            {'friend_id':1,"amount":1 } 
           ]},
        {
          title: "אוהל", 
          amount: 5, 
          confirmed: 4,
          Who_brings:[
            {'friend_id':1,"amount":2 } ,
            {'friend_id':2,"amount":2 } 
          ]},
        {
          title: "צידנית",
          amount: 1, 
          confirmed: 1,
          Who_brings:[
            {'friend_id':4,"amount":1 } 
          ]
        }
      ]
  };
   
  }


}

 
  
    

  


