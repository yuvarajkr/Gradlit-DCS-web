import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-edit-user-in-a-role',
  templateUrl: './edit-user-in-a-role.component.html',
  styleUrls: ['./edit-user-in-a-role.component.scss']
})
export class EditUserInARoleComponent {
  selectedStudentId:any;
  selectedClubDetials:any;
  allClubs = [];
  departments: any;
  constructor(private _http:StudentHttpService,private _actvRoute:ActivatedRoute,public studentDataService:StudentDataService, private _router:Router){
    this.selectedStudentId= this._actvRoute.snapshot.params?.id;

    this._http.getAllDepartments().subscribe({
      next: (allDeps:any) => {
          this.departments = allDeps.data;
      },
      error: (err)=>{
        console.log('fetching departments failed...');
      }
    })
    this.studentDataService.selectedUserData;

  }
  public studentName = this.studentDataService.selectedUserData?.name;
  public usn = this.studentDataService.selectedUserData?.usn;
  public clubLogo: File;
  public email = this.studentDataService.selectedUserData?.email;
  public selectedDepId= this.studentDataService.selectedUserData?.department?.Id;
  public clubDisplayName = '';
  imageUrl: string | ArrayBuffer;
  public searchedUserResult: any[] = [];
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

   public onEditStudentSave(){
    let userData = {
      name: this.studentName,
      user_id:parseInt(this.selectedStudentId),
      usn:this.usn,
      email:this.email,
      dep_id:this.selectedDepId
    };
    this._http.updateStudentByAdmin(userData
      ).subscribe({
        next: (response)=>{
            console.log(response);
            this._router.navigate([`/student/roles/list-roles`]);
        } ,
        error : (err)=> {
          console.log(err);
          this._router.navigate([`/student/roles/list-roles`]);
        } 
      });
   }

   resetCalculations() {
    this.selectedUsersID = structuredClone(this.selectedUsersID);
  }

}
