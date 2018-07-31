import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, NavigationEnd } from '@angular/router';
import { AuthService } from '../../users/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public loadRouting:boolean=true;
  constructor(
    private router: Router,
    private autService : AuthService,
    public auth: AuthService
  ) { }

  canActivate(route, state: RouterStateSnapshot){
   
    if(this.autService.isLoggedIn()) 
      return true;

    this.router.navigate(['/login'], { queryParams: {returnUrl:state.url } } );
    return false;

  }
  

}
