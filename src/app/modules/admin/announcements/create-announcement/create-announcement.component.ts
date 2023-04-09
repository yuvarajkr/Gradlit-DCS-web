import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-create-announcement-club',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent {
  public formFieldHelpers = [''];
  public createStudentCircularForm ;
  public file: File;
  constructor(private _studentData:StudentDataService, private _studentHttp:StudentHttpService, private _dialogRef:MatDialogRef<CreateAnnouncementComponent>){
    this.createStudentCircularForm = this._studentData.getCreateCircularForm();
  }

  public onCreateCircular(){
    this._studentHttp.createCirculars(this._populateCircularData()).subscribe({
      next: (createClubResponse) => {
        this._closeDialog();
        console.log(createClubResponse);
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }

  private _populateCircularData(){
    let formData = new FormData();
    this.file && formData.append('file_name',this.file);
    formData.append('heading',this.createStudentCircularForm.get('heading').value);
    formData.append('group_name',this.createStudentCircularForm.get('group_name').value);
    formData.append('description',this.createStudentCircularForm.get('description').value);
    return formData;
  }

  public onFileUpload(event){
    this.file = event.target.files[0];
  }

  private _closeDialog(){
    this._dialogRef.close();
  }
}
