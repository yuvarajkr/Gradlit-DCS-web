import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateStudentClubComponent } from 'app/modules/student/student-clubs/create-student-club/create-student-club.component';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-announcement-clubs',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  public allAnnouncement:any[];
  constructor(private _studentHttp:StudentHttpService, private _matDialog:MatDialog){
          this._studentHttp.getAllAnnouncements().subscribe({
            next: (allAnnouncementDetails)=>{
              this.allAnnouncement = allAnnouncementDetails.data.results;
            }
          });
  }

  public onCreateClub(): void
  {
    const dialogRef =  this._matDialog.open(CreateStudentClubComponent, {
      autoFocus: false,
      maxHeight: '90vh',
      data     : {
          note: {}
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }
    
}
