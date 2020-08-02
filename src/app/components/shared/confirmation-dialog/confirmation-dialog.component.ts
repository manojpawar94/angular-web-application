import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Confirmation } from 'src/app/models/Confirmation';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  data: Confirmation;

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    //@Optional() will prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) data: Confirmation) {
    console.log(`Inside the Confirmation Dialog Component, input data : ${data}`)
    this.data = data;
  }

  ngOnInit(): void {
  }

  doAction() {
    this.dialogRef.close({ event: this.data.action, data: this.data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
