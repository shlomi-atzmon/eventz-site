import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, NavigationEnd } from '@angular/router';
import { AuthService } from './auth.service';
import { RoutingState } from '../helpers/RoutingState';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public loadRouting:boolean=true;
  constructor(
    private router: Router,
    private autService : AuthService,
    public auth: AuthService,
    public routingState: RoutingState
  ) { }

  canActivate(route, state: RouterStateSnapshot){
   
    if(this.autService.isLoggedIn()) {
      
      if( this.loadRouting)
        this.routingState.loadRouting();
      
    
      return true;
    }


    

    this.router.navigate(['/login'], { queryParams: {returnUrl:state.url } } );
    return false;

  }
  previousUrl(){
    this.loadRouting = false;
  }



}
