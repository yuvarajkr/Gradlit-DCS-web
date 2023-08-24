import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

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

  constructor(private _http:StudentHttpService, private _router:Router){
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

  onClickDelete(clubId:any){
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
