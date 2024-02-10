import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-department-notification',
  templateUrl: './department-notification.component.html',
  styleUrls: ['./department-notification.component.scss']
})
export class DepartmentNotificationComponent {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: {type:string}, private _dialogRef:MatDialogRef<DepartmentNotificationComponent>){

  }

  public onOkClick(){
    this._dialogRef.close();
  }
}
