import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
  
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)).pipe(

        map( response => {

          let result = response.json();

          if(result && result.token){
            localStorage.setItem('token',result.token)
            return true;
          }
          return false;

        }));
     
  }

  logout() { 
 
    localStorage.removeItem('token');
    
  }

  isLoggedIn() { 

     let jwtHelper = new JwtHelper();

     let token = localStorage.getItem('token');

     if(!token) return false;

     let isExpired = jwtHelper.isTokenExpired(token);

     return (!isExpired)
    
  }

  get currentUser(){

    let token = localStorage.getItem('token');

    if(!token) return null;

    console.log(new JwtHelper().decodeToken( token ))
    return new JwtHelper().decodeToken( token );
  }

  
}

