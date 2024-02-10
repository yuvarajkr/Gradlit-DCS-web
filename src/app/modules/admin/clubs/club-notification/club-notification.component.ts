import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-club-notification',
  templateUrl: './club-notification.component.html',
  styleUrls: ['./club-notification.component.scss']
})
export class ClubNotificationComponent {
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: {type:string}, private _dialogRef:MatDialogRef<ClubNotificationComponent>){

  }

  public onOkClick(){
    this._dialogRef.close();
  }
}
