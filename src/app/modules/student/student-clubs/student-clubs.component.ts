import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentHttpService } from '../student-utils-services/student-http.service';
import { CreateStudentClubComponent } from './create-student-club/create-student-club.component';

@Component({
  selector: 'app-student-clubs',
  templateUrl: './student-clubs.component.html',
  styleUrls: ['./student-clubs.component.scss']
})
export class StudentClubsComponent {
  public allClubs:any[];
  constructor(private _studentHttp:StudentHttpService, private _matDialog:MatDialog){
          this._studentHttp.getAllClub().subscribe({
            next: (allClubDetails)=>{
              this.allClubs = allClubDetails;
            }
          });
  }

  public onCreateClub(): void
  {
    const dialogRef =  this._matDialog.open(CreateStudentClubComponent, {
      autoFocus: false,
      data     : {
          note: {}
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }
    
}
