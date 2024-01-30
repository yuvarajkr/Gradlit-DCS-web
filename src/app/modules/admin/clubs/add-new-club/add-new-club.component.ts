import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'app/mock-api/common/user/data';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';
import { BehaviorSubject, Subject } from 'rxjs';


export interface userDetails {
  id: number,
  name: string,
  usn: string,
  email: string
}


@Component({
  selector: 'app-add-new-club',
  templateUrl: './add-new-club.component.html',
  styleUrls: ['./add-new-club.component.scss']
})
export class AddNewClubComponent {

  constructor(private _http:StudentHttpService, private _router:Router){
    
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
    //let bufferArr = this.selectedUsersID.split('');
   // bufferArr.splice(removedId,1);
   // this.selectedUsersID =  bufferArr.join('');
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

   public onAddClub(){
    let postFormData =  new FormData();
    postFormData.append('name',this.clubName );
    postFormData.append('description', this.clubDesc);
    postFormData.append('display_name', this.clubDisplayName);
    postFormData.append('email', this.email);
    postFormData.append('User', this.selectedUsersID.join(','));
    this.clubLogo && postFormData.append('logo', this.clubLogo);
    this._http.createClubByAdmin(postFormData
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




}
