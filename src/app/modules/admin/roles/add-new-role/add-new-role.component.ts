import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-add-new-role',
  templateUrl: './add-new-role.component.html',
  styleUrls: ['./add-new-role.component.scss']
})
export class AddNewRoleComponent {
  roleFormGroup:any;
  permission = [
    {
      "mod_id": 2,
      "actions": ""
    },
    {
      "mod_id": 3,
      "actions": ""
    },
    {
      "mod_id": 4,
      "actions": ""
    },
    {
      "mod_id": 5,
      "actions": ""
    },
    {
      "mod_id": 6,
      "actions": ""
    },
    {
      "mod_id": 7,
      "actions": ""
    },
  ];

  constructor(private _studentDataService:StudentDataService,private _router:Router, private _http:StudentHttpService){
    this.roleFormGroup = this._studentDataService.getRolesForm();
  }

  

  permissionHeader: string[] = ['Module', 'Create', 'View', 'Edit', 'Delete', 'Approve'];

  allModule = ['Feed','Events','Announcement','Circular','Clubs','Profile'];

  public onPermissionChange(checked:boolean, selectedPermission:string ){
    let permissionType = selectedPermission.split('_')[0];
    let permIndex = this.permissionHeader.findIndex((eachPerm) => eachPerm === permissionType);
    
      switch (selectedPermission.split('_').pop()) {
        case 'Feed':
          checked ? this.setPermission(0,permIndex) : this.removePermission(0,permIndex);
          break;

          case 'Events':
            checked ? this.setPermission(1,permIndex) : this.removePermission(1,permIndex);
          break;

          case 'Announcement':
            checked ? this.setPermission(2,permIndex) : this.removePermission(2,permIndex);
            
          
          break;

          case 'Circular':
            checked ? this.setPermission(3,permIndex) : this.removePermission(3,permIndex);
            
          
          break;

          case 'Clubs':
            checked ? this.setPermission(4,permIndex) : this.removePermission(4,permIndex);
            
          
          break;

          case 'Profile':
            checked ? this.setPermission(5,permIndex) : this.removePermission(5,permIndex);
            
          
          break;
      }
    
  }

  public setPermission(i,permIndex){
    if(this.permission[i].actions) {
      let tempArr = this.permission[i].actions.split(',');
      tempArr.push(String(permIndex));
      this.permission[i].actions =  tempArr.toString();
    } else {
      this.permission[i].actions = this.permission[i].actions + permIndex;
    }
  }

  public removePermission(i,permIndex){
    if(this.permission[i].actions) {
      let tempArr = this.permission[i].actions.split(',');
      let tempIndex = tempArr.findIndex(eachele => eachele === String(permIndex));
      tempArr.splice(tempIndex,1);
      this.permission[i].actions =  tempArr.toString();
    } 
  }

  public onCreateRole(){
    let payload = this.roleFormGroup.getRawValue();
    payload.permissions = this.permission;
    payload.is_add_role = true;
    this._http.createRole(payload).subscribe({
      next: (res)=>{
      console.log('created role');
      this._router.navigate([`student/roles/list-roles`]);
    },
    error: (err) => console.log('role creation failed..!')});
  }
  
  public disableCheckBox(id:string){
    
      if(id.includes('Edit_Feed')){
        return true;
       }
      if (id.includes('Approve')){
        return  id !== 'Approve_Feed';
      }
     
  }

}
