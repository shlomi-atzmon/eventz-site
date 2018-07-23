import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import * as $ from "jquery"
import { AuthGuard } from './services/auth-guard.service';
import { RoutingState } from './helpers/RoutingState';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  previousRoute;
  constructor(
    public RoutingState:RoutingState,
    public auth: AuthService, 
    public AuthGuard:AuthGuard,
   
  ){}
  getPreviousUrl(){
      let url = this.RoutingState.getPreviousUrl();
    
      return url
  }
 

}
