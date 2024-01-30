import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  displayedColumns = ['user', 'userID', 'department', 'delete'];
  products = products;
  dataSource = products;
  constructor(private _route:ActivatedRoute, private _studentHttp:StudentHttpService, private _router:Router){
    this.selectedRoleName = this._route.snapshot.params.name;
    this.selectedRoleDes = this._route.snapshot.params.description;
    this.selectedRoleId = this._route.snapshot.params.id;
    this._studentHttp.getUsersOfRoleId(this.selectedRoleId).subscribe({
      next: (userListDetails:any)=>{
        this.existingUserDetails = userListDetails.data?.rows;
        
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
