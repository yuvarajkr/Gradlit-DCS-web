import { Component } from '@angular/core';
import { StudentDataService } from '../../student-utils-services/student-data.service';
import { StudentHttpService } from '../../student-utils-services/student-http.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-student-club',
  templateUrl: './create-student-club.component.html',
  styleUrls: ['./create-student-club.component.scss']
})
export class CreateStudentClubComponent {
  public formFieldHelpers = [''];
  public createStudentClubForm ;
  constructor(private _studentData:StudentDataService, private _studentHttp:StudentHttpService, private _dialogeRef:MatDialogRef<CreateStudentClubComponent>){
    this.createStudentClubForm = this._studentData.getCreateClubForm();
    this.createStudentClubForm.get('name').valueChanges.subscribe((name)=>{
      this.createStudentClubForm.get('display_name').setValue(name);
    });
  }

  public onCreateClub(){
    this._studentHttp.createClub(this.createStudentClubForm.getRawValue()).subscribe({
      next: (createClubResponse) => {
        this.closeDialog();
        console.log(createClubResponse);
        
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }

  public closeDialog(){
    this._dialogeRef.close();
  }
}
