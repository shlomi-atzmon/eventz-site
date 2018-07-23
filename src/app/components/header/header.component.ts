import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service' 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public previousUrl: string;
  public currentUrl: string;
  public avatar:string="assets/images/avatar.jpeg";
  
  constructor(public router: Router, public auth: AuthService) {
  
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  ngOnInit() {

    
  }

}
