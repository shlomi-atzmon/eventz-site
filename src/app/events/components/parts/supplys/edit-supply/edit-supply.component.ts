import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppEventSupply } from '../../../../services/events.service';

@Component({
  selector: 'edit-supply',
  templateUrl: './edit-supply.component.html',
  styleUrls: ['./edit-supply.component.css']
})
export class EditSupplyComponent {

  constructor(
    public dialogRef: MatDialogRef<EditSupplyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AppEventSupply) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
