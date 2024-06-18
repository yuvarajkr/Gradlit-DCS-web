import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateStudentClubComponent } from 'app/modules/student/student-clubs/create-student-club/create-student-club.component';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-announcement-clubs',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  public allAnnouncement:any[];
  isCircular: string;
  isCircExpanded = false;
  isAnncExpanded = false;
  selectedAnnDetails: any;
  constructor(private _studentHttp:StudentHttpService, private _matDialog:MatDialog,private _activatedRoute:ActivatedRoute,private _dataService:DataService){
          // this._studentHttp.getAllCircualrs().subscribe({
          //   next: (allAnnouncementDetails)=>{
          //     this.allAnnouncement = allAnnouncementDetails.data.results;
          //   }
          // });
          this.isCircular = this._activatedRoute.snapshot.queryParamMap.get('circular');
          this.onTypeSelection(this.isCircular === 'announcement' ? 'Announcement' : 'Circular');
          this._studentHttp.getAllDepartments().subscribe({
            next: (allDeps:any) => {
                this._dataService.setAllDepartments(allDeps.data);
            },
            error: (err)=>{
              console.log('fetching departments failed...');
            }
          })
  }

  public onCreateCircular(dataType:string): void
  {
    const dialogRef =  this._matDialog.open(CreateAnnouncementComponent, {
      autoFocus: false,
      maxHeight: '90vh',
      width: '60vw',
      data     : {
         type: dataType
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }

  public onTypeSelection(type:string){
      if(type === 'Circular'){
        this.isCircular = 'Circular';
        this._studentHttp.getAllCircualrs().subscribe({
          next: (allAnnouncementDetails)=>{
            this.allAnnouncement = allAnnouncementDetails?.data?.rows;
            this.allAnnouncement = this.allAnnouncement?.sort((a, b) => -a.updated_at.localeCompare(b.updated_at));
          }
        });
      } else{
        this.isCircular = 'announcement';
        this._studentHttp.getAllAnnouncements().subscribe({
          next: (allAnnouncementDetails)=>{
            this.allAnnouncement = allAnnouncementDetails.data.rows;
          }
        });
      }
  }

  public onAnncExpanded(anncDetails){
      this.isAnncExpanded = true;
      this.selectedAnnDetails= anncDetails;
  }

  public onDeleteCircular(circularId){
    this._studentHttp.deleteCircular(circularId).subscribe({
      next: (res)=>{
        this.onTypeSelection('Circular');
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
    
}
