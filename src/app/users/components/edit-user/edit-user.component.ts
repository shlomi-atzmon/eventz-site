import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  inputs:['page']
})
export class EditUserComponent implements OnInit {

  page;
  constructor() { }

  ngOnInit() {
  }

  isActive(page){
    return this.page==page;
  }

}
