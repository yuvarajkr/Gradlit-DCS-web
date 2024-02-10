import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';
import { ClubNotificationComponent } from '../club-notification/club-notification.component';

export const products = [];


export interface RoleDetails {
  name: string;
  TotalUser?: string;
  CreatedBy?: string;
  id:number
}

@Component({
  selector: 'app-list-all-clubs',
  templateUrl: './list-all-clubs.component.html',
  styleUrls: ['./list-all-clubs.component.scss']
})
export class ListAllClubsComponent {
  displayedColumns = ['ClubName', 'ProfileName', 'AdminID', 'Followers', 'Actions'];
  products: RoleDetails[] = products;
  dataSource = products;
  allClubs = [];

  constructor(private _http:StudentHttpService, private _router:Router,private _matDialog:MatDialog){
    this._http.getAllClubsByAdmin().subscribe({
      next: (clubData:any)=>{
       this.allClubs = clubData.data.rows;
      },
      error: (err)=>{
        console.log(err);
      } 
    });
  }

  onClickEdit(clubDetials:any){
    this._router.navigate([`student/add-clubs/edit-club/${clubDetials.Id}`]);
    //this._router.navigate(['/student/profile']);
  }

  public notifiyLoadedUserDelete(dataType:string): void
  {
    const dialogRef =  this._matDialog.open(ClubNotificationComponent, {
      autoFocus: false,
      maxHeight: '80vh',
      width: '30vw',
      data     : {
         type: dataType
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }

  onClickDelete(element:any){
    let clubId = element.Id;
    if(element.user?.length > 0){
      this.notifiyLoadedUserDelete('');
      return;
    }
      this._http.deleteClubByAdmin(clubId).subscribe({
        next:(res)=> {
            console.log(res);
            this._http.getAllClubsByAdmin().subscribe({
              next: (clubData:any) => {
                this.allClubs = clubData.data.rows;
              },
              error: (err)=>{
                console.log('fetching roles failed...');
              }
            })
            
        },error: (err)=>{
          console.log(err);
          
        }
      });
  }

}
