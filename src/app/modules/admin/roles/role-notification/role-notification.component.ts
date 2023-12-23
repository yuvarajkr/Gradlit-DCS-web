import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-role-notification',
  templateUrl: './role-notification.component.html',
  styleUrls: ['./role-notification.component.scss']
})
export class RoleNotificationComponent {
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: {type:string}, private _dialogRef:MatDialogRef<RoleNotificationComponent>){

  }

  public onOkClick(){
    this._dialogRef.close();
  }
}
