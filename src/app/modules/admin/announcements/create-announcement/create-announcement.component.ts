import { Component } from '@angular/core';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-create-announcement-club',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.scss']
})
export class CreateAnnouncementComponent {
  public formFieldHelpers = [''];
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
