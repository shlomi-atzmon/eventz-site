import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { environment } from '../../../environments/environment';

export function fakeBackendFactory(
    backend: MockBackend, 
    options: BaseRequestOptions) {
        
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiR29uZW4gU2hlbGVnIiwiYWRtaW4iOnRydWUsIm5vdGVzIjoxMCwiaW1nIjoiYXNzZXRzL2ltYWdlcy9nb25lbl91c2VyLmpwZyJ9.RO4mVMCkdbtkVGz1ZF2_YRDVpACoY_lG3FQfC5fb5vM';
  



  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an 
    // asynchronous call to the server that takes 1 second. 
    setTimeout(() => {
      var api_url=environment.api_url
     
     
      if (connection.request.url.endsWith(api_url+'resetPassword') &&
      connection.request.method === RequestMethod.Post){

        let body = JSON.parse(connection.request.getBody());

        if (body.email!=='gonsheleg@gmail.com') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token,id:1 }
           })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 400 })
          ));
        }

      }

      if (connection.request.url.endsWith(api_url+'users') &&
        connection.request.method === RequestMethod.Post){
console.log(999);
          let body = JSON.parse(connection.request.getBody());

          if (body.email!=='gonsheleg@gmail.com') {
            connection.mockRespond(new Response(
              new ResponseOptions({
                status: 200,
                body: { token: token,id:1 }
             })));
          } else {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 400 })
            ));
          }

        }

console.log(api_url+'authenticate')
console.log(connection.request.url.endsWith(api_url+'login'))
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith(api_url+'login') &&
        connection.request.method === RequestMethod.Post) {

          console.log('999')
        let body = JSON.parse(connection.request.getBody());

        if (body.email === 'gonsheleg@gmail.com' && body.password === '1234') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: token }
           })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }

      if (connection.request.url.endsWith(api_url+'events') &&
      connection.request.method === RequestMethod.Get){

        connection.mockRespond(new Response(
          new ResponseOptions({
            status: 200,
            body: { events: EVENTS }
        })));
       

      }



    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};

const EVENTS = [
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