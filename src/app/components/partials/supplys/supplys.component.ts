import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SupplysDataSource } from './supplys-datasource';
import { EventSupply, EventFriend } from '../../../services/events.service';
import { EditSupplyComponent } from './edit-supply/edit-supply.component';


@Component({
  selector: 'event-supply',
  templateUrl: './supplys.component.html',
  styleUrls: ['./supplys.component.css'],
  inputs: ['supplys','friends'],
})
export class SupplysComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() suppliy
  dataSource: SupplysDataSource;
  
  public duplicateSupply;
  public friends:EventFriend[]
  public supplys:EventSupply[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'amount','confirmed','missing','who_brings'];
  
  constructor(public dialog: MatDialog) {}
  
  ngOnInit() {
   
    this.dataSource = new SupplysDataSource(this.paginator, this.sort, this.supplys);
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
