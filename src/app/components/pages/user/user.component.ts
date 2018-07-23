import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  showFiller = true;
  public page:string='settings'
  ngOnInit() {
  }

  @ViewChild('userSideNav') userSideNav: any;
  opened: any = false;
  isOpened() {

    return this.userSideNav.opened
  }

  sideNavIcon(){

    return this.isOpened() ? 'chevron_right': 'chevron_left'
  }

  togglePage(page){

    this.page=page;

  }
  isActive(page){
    return this.page==page;
  }
}
