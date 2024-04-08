import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';
export const products = [];
@Component({
  selector: 'app-add-user-to-roles',
  templateUrl: './add-user-to-roles.component.html',
  styleUrls: ['./add-user-to-roles.component.scss']
})
export class AddUserToRolesComponent {
  selectedRoleName: any;
  selectedRoleId: any;
  selectedRoleDes: any;
  existingUserDetails:any;
  public usersDetailFile: File;
  updateUsers = false;
  displayedColumns = ['user', 'userID','email','department','emailStatus','Actions'];
  products = products;
  dataSource = products;
  allUsersSelected: boolean;
  selectedUserByAdmin = new Set();
  constructor(private _route:ActivatedRoute, private _studentHttp:StudentHttpService, private _studentDataService:StudentDataService, private _router:Router){
    this.selectedRoleName = this._route.snapshot.params.name;
    this.selectedRoleDes = this._route.snapshot.params.description;
    this.selectedRoleId = this._route.snapshot.params.id;
    this.getAllUsersOfRole();
  }

  public getAllUsersOfRole(){
    this._studentHttp.getUsersOfRoleId(this.selectedRoleId).subscribe({
      next: (userListDetails:any)=>{
        this.existingUserDetails = userListDetails.data?.rows;
        //this.selectedUserByAdmin = structuredClone(this.existingUserDetails);
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  public onFileUpload(event){
    const file:File = event.target.files[0];
    this.usersDetailFile = file;
   }

   public onUpdateUsers(){
    this.updateUsers = true;
   }

   public onClickDelete(userData){
      this._studentHttp.deactivateUserByAdmin({user_id: userData.id,status:2}).subscribe({
        next: (data)=>{
          this.getAllUsersOfRole();
        },
        error: (err)=>{
          console.log(err);
        }
      })
   }

   public onSelectAllUser(checkedData){
    this.allUsersSelected = checkedData.checked;
    if(checkedData.checked){
      this.existingUserDetails.forEach(e=> this.selectedUserByAdmin?.add(e.id))
    }else{
      this.selectedUserByAdmin = new Set();
    }
   }

   public onUserSelect(checkedData,userData){
    if(checkedData.checked){
      this.selectedUserByAdmin.add(userData.id);
    }else{
      this.selectedUserByAdmin.delete(userData.id);
    }
   }

   public onSendEmail(){
    this._studentHttp.sendWelcomeMailByAdmin({users_list:Array.from(this.selectedUserByAdmin).join(',')}
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

   public onClickEdit(data){
    this._studentDataService.selectedUserData = data;
    this._router.navigate([`/student/roles/edit-user/${data.id}/${data.name}`]);
   }

   

   public onAddUsers(){
    if(!this.usersDetailFile)return;
    let postFormData =  new FormData();
    this.usersDetailFile && postFormData.append('file', this.usersDetailFile);
    postFormData.append('role_id', this.selectedRoleId);
     this._studentHttp.addUsersToRole(postFormData
     ).subscribe({
       next: (response)=>{
        this._router.navigate([`student/roles/list-roles`]);
       } ,
       error : (err)=> {
         console.log(err);
       } 
     });
   }
}
