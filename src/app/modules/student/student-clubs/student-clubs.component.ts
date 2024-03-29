import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentHttpService } from '../student-utils-services/student-http.service';
import { CreateStudentClubComponent } from './create-student-club/create-student-club.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-clubs',
  templateUrl: './student-clubs.component.html',
  styleUrls: ['./student-clubs.component.scss']
})
export class StudentClubsComponent {
  public allClubs:any[];
  constructor(private _studentHttp:StudentHttpService,private _router:Router, private _matDialog:MatDialog){
          this._studentHttp.getAllClub().subscribe({
            next: (allClubDetails)=>{
              this.allClubs = allClubDetails.data.rows;
            }
          });
  }

  public onCreateClub(): void
  {
    const dialogRef =  this._matDialog.open(CreateStudentClubComponent, {
      autoFocus: false,
      maxHeight: '90vh',
      width:'60vw',
      data     : {
          note: {}
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    this._studentHttp.getAllClub().subscribe({
      next: (allClubDetails)=>{
        this.allClubs = allClubDetails.data.rows;
      }
    })
  });
  }
  
  onClubCardClick(){
    this._router.navigate(['/student/profile']);
  }
    
}
