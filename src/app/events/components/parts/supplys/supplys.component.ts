import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SupplysDataSource } from './supplys-datasource';
import { AppEventSupply, AppEventFriend, EventsService } from '../../../services/events.service';
import { EditSupplyComponent } from './edit-supply/edit-supply.component';


@Component({
  selector: 'event-supply',
  templateUrl: './supplys.component.html',
  styleUrls: ['./supplys.component.css'],
  inputs: ['event_id'],
})
export class SupplysComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() suppliy
  dataSource: SupplysDataSource;
  
  public duplicateSupply;
  public friends:AppEventFriend[];
  public supplys:AppEventSupply[];
  event_id;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'amount','confirmed','missing','who_brings'];
  
  constructor(public dialog: MatDialog, private eventService:EventsService) {}
  
  ngOnInit() {
   
    if(this.event_id){
      this.eventService.getEventSupplys( this.event_id )
      .subscribe(response=>{
        console.log('event-supplys' ,response)
        this.supplys = response['supplys'];
        this.dataSource = new SupplysDataSource(this.paginator, this.sort, this.supplys);
      })
    }
    

  }

  friendName(friend_id){

    let name = '';
    let friend = this.friends.find(function(element){
      return element.id === friend_id;
    })

    if(friend)
      name = friend.name;
      
    return name ;
  }

  addSupply(supply){
  
    let check = this.supplys.find(function(element) {
      return element.title === supply.title;
    })


    if(typeof check != 'undefined'){
      
      this.duplicateSupply = supply;

      return false;
    }
    this.supplys.splice(0,0,supply);

    this.dataSource = new SupplysDataSource(this.paginator, this.sort, this.supplys);;
   
  }
  editSupply(supply): void {

    
    const dialogRef = this.dialog.open(EditSupplyComponent, {
      width: '80%',
      data: supply
    });

    dialogRef.afterClosed().subscribe(result => {
      supply = result;
    });
  }

}
