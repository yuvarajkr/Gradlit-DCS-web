import { Component } from '@angular/core';
import { StudentDataService } from '../../student-utils-services/student-data.service';
import { StudentHttpService } from '../../student-utils-services/student-http.service';

@Component({
  selector: 'app-create-student-club',
  templateUrl: './create-student-club.component.html',
  styleUrls: ['./create-student-club.component.scss']
})
export class CreateStudentClubComponent {
  public formFieldHelpers = ['']
  public createStudentClubForm ;
  constructor(private _studentData:StudentDataService, private _studentHttp:StudentHttpService){
    this.createStudentClubForm = this._studentData.getCreateClubForm();
  }

  public onCreateClub(){
    this._studentHttp.createClub(this.createStudentClubForm.getRawValues()).subscribe({
      next: (createClubResponse) => {
        console.log(createClubResponse);
      },
      error: (err) =>{
        console.log(err);
      }
    });
  }
}
