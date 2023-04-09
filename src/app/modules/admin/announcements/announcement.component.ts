import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateStudentClubComponent } from 'app/modules/student/student-clubs/create-student-club/create-student-club.component';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';

@Component({
  selector: 'app-announcement-clubs',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  public allAnnouncement:any[];
  constructor(private _studentHttp:StudentHttpService, private _matDialog:MatDialog){
          this._studentHttp.getAllCircualrs().subscribe({
            next: (allAnnouncementDetails)=>{
              this.allAnnouncement = allAnnouncementDetails.data.results;
            }
          });
  }

  public onCreateCircular(): void
  {
    const dialogRef =  this._matDialog.open(CreateAnnouncementComponent, {
      autoFocus: false,
      maxHeight: '90vh',
      width: '60vw',
      data     : {
          note: {}
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }
    
}
