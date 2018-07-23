import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";


@Injectable()
export class RoutingState {
  private history = [];

  private lastUrl;
  constructor(
    private router: Router
  ) {}

  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        
        if(this.lastUrl !== urlAfterRedirects){
            this.lastUrl = urlAfterRedirects

            if(this.history.length>3){
                this.history = this.history.slice(2,4)
            }
            this.history = [...this.history, urlAfterRedirects];
            console.log(this.history)
        }
           

           
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 2] || '/';
  }


  deleteLast() {
   
    this.history = this.history.slice(0,this.history.length-1)
   
      
  }
}