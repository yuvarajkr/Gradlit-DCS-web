import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public formFieldHelpers = [''];
  public createStudentCircularForm ;
  public file: File;
  constructor(private _studentData:StudentDataService,@Optional() @Inject(MAT_DIALOG_DATA) public data: {type:string}, private _studentHttp:StudentHttpService){
    this.createStudentCircularForm = this._studentData.getCreateCircularForm();
  }

  public onCreateCircular(){
    if(this.data.type === 'Circular'){
      this._studentHttp.createCirculars(this._populateData()).subscribe({
        next: (createClubResponse) => {
         
          console.log(createClubResponse);
        },
        error: (err) =>{
          console.log(err);
        }
      });
    } else {
      this._studentHttp.createAnnouncement(this._populateData()).subscribe({
        next: (createAnnouncementResponse) => {
          
          console.log(createAnnouncementResponse);
        },
        error: (err) =>{
          console.log(err);
        }
      });
    }
  }

  private _populateData(){
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
}
