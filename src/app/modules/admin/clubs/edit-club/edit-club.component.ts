import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

export interface userDetails {
  id: number,
  name: string,
  usn: string,
  email: string
}


@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.scss']
})
export class EditClubComponent {
  selectedClubId:any;
  selectedClubDetials:any;
  allClubs = [];
  constructor(private _http:StudentHttpService,private _actvRoute:ActivatedRoute, private _router:Router){
    this.selectedClubId= this._actvRoute.snapshot.params?.id;

    this._http.getAllClubsByAdmin().subscribe({
      next: (clubData:any)=>{
       this.allClubs = clubData.data.rows;
       this.selectedClubDetials = this.allClubs.find((eachClubDetails) => eachClubDetails.Id === +this.selectedClubId);
      this.clubName = this.selectedClubDetials.name;
      this.clubDesc = this.selectedClubDetials.description;
      this.imageUrl = this.selectedClubDetials.logo;
      this.email = this.selectedClubDetials.email;
      this.clubDisplayName = this.selectedClubDetials.display_name;
      this.searchedUserResult = this.selectedClubDetials.user;
      let selectedID = '';
      this.searchedUserResult.forEach(element => {
        this.selectedUsersID.push(element.id);
      });
      },
      error: (err)=>{
        console.log(err);
      }
    });

  }
  public clubName = '';
  public clubDesc = '';
  public clubLogo: File;
  public email = '';
  public clubDisplayName = '';
  imageUrl: string | ArrayBuffer;
  public searchedUserResult: userDetails[] = [];
  public selectedUsersID = [];

  public onFileUpload(event){
    const file:File = event.target.files[0];
    this.clubLogo = file;
    let reader = new FileReader(); 
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.imageUrl = reader.result;
      };
   }

   public  onAdminSelected(addedUserId){
    this.selectedUsersID.push(addedUserId);
   }

   public onUserRemoved(removedUserID){
    let removedId = this.selectedUsersID.indexOf(removedUserID.value);
    this.selectedUsersID.splice(removedId,1);
    
   }

   public onUserSearched(searchKey:any){
    if(searchKey.term.length > 2) {
      this._http.getSearchedUsers(searchKey.term).subscribe({
        next : (userData:any)=>{
          this.searchedUserResult = userData.data.rows;
        },
        error: (err)=> {
          console.log(err);
        }
      })
    }
   }

   public onEditClubSave(){
    let postFormData =  new FormData();
    postFormData.append('club_id',''+this.selectedClubId);
    postFormData.append('name',this.clubName );
    postFormData.append('description', this.clubDesc);
    postFormData.append('display_name', this.clubDisplayName);
    postFormData.append('email', this.email);
    postFormData.append('User', this.selectedUsersID.join(','));
    this.clubLogo && postFormData.append('logo', this.clubLogo);
    this._http.updateClubByAdmin(postFormData
      ).subscribe({
        next: (response)=>{
            console.log(response);
            this._router.navigate([`student/add-clubs/list-clubs`]);
        } ,
        error : (err)=> {
          console.log(err);
          this._router.navigate([`student/add-clubs/list-clubs`]);
        } 
      });
   }

   resetCalculations() {
    this.selectedUsersID = structuredClone(this.selectedUsersID);
  }

}
