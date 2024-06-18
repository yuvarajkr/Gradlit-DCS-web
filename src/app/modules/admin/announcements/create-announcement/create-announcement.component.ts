import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-create-announcement-club',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent {
  public formFieldHelpers = [''];
  public createStudentCircularForm ;
  public file: File;
  image_file: any;
  departments: any;
  selectedDepId:any;
  constructor(private _studentData:StudentDataService,@Optional() @Inject(MAT_DIALOG_DATA) public data: {type:string,allDeps:any}, private _studentHttp:StudentHttpService,private _data:DataService, private _dialogRef:MatDialogRef<CreateAnnouncementComponent>){
    this.createStudentCircularForm = this._studentData.getCreateCircularForm();
    this._studentHttp.getAllDepartments().subscribe({
      next: (allDeps:any) => {
          this.departments =  allDeps.data;
      },
      error: (err)=>{
        console.log('fetching departments failed...');
      }
    })

  }

  public onCreateCircular(){
    if(this.data.type === 'Circular'){
      this._studentHttp.createCirculars(this._populateData()).subscribe({
        next: (createClubResponse) => {
          this._closeDialog();
          document.location.reload();
        },
        error: (err) =>{
          console.log(err);
        }
      });
    } else {
      this._studentHttp.createAnnouncement(this._populateData()).subscribe({
        next: (createAnnouncementResponse) => {
          this._closeDialog();
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
    this.image_file && formData.append('image_name',this.image_file);
    formData.append('department_id',this.createStudentCircularForm.get('selectedDepId').value);
    formData.append('heading',this.createStudentCircularForm.get('heading').value);
    formData.append('group_name',this.createStudentCircularForm.get('group_name').value);
    formData.append('description',this.createStudentCircularForm.get('description').value);
    return formData;
  }

  public onFileUpload(event){
    this.file = event.target.files[0];
    
  }

  public onImageUpload(event){
    this.image_file  = event.target.files[0];
  }

  private _closeDialog(){
    this._dialogRef.close();
  }
}
