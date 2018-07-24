import { Component, OnInit, ViewChild , Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FriendsDataSource } from './friends-datasource';
import { EditFriendComponent } from './edit-friend/edit-friends.component';
import { EventFriend } from '../../../services/events.service';

@Component({
  selector: 'event-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  inputs: ['friends'],
 
})

export class FriendsComponent implements OnInit {

  duplicateFriend;
  friends:EventFriend[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() addNewFriend = new EventEmitter();
 
  constructor(public dialog: MatDialog) {}



  dataSource: FriendsDataSource;
 
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['num', 'name','email','phone','status'];

  ngOnInit() {
    
    this.dataSource = new FriendsDataSource(this.paginator, this.sort, this.friends);
  }

  addFriend(friend){
  
    let check = this.friends.find(function(element) {
      return element.email === friend.email;
    })

    console.log(typeof check)
    if(typeof check != 'undefined'){
      
      this.duplicateFriend = friend;

      return false;
    }
    this.friends.splice(0,0,friend);

    this.dataSource = new FriendsDataSource(this.paginator, this.sort, this.friends);;
   
  }


  editFriend(friend): void {

    const dialogRef = this.dialog.open(EditFriendComponent, {
      width: '90%',
      data: friend
    });

    dialogRef.afterClosed().subscribe(result => {
     
      friend = result;
    });
  }
  
}
