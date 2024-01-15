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
  is_moderator: boolean;

  constructor(private _studentDataService:StudentDataService,private _router:Router, private _http:StudentHttpService){
    this.roleFormGroup = this._studentDataService.getRolesForm();
  }

  

  permissionHeader: string[] = ['Module', 'Create', 'View', 'Edit', 'Delete', 'Approval','Moderation'];
  permissionHeaderToolTips: string[] = [
    'Modules in roles', 
    'Grants permission to create feeds, events, announcement, circular, clubs, profile to this role',
     'Grants permission to View modules to this role', 
     'Grants permission to Edit modules expect Feeds module (only creater of feeds are allowed to edit)', 
     'Grants permission to Delete modules',
     'Needs Approval of content moderator to make any of this roles posts visible',
     'Grants permission to do content Moderation to this role'];

  allModule = ['Feed','Events','Announcement','Circular','Clubs','Profile'];

  public onPermissionChange(checked:boolean, selectedPermission:string ){
    if(selectedPermission === 'Moderation_Feed') {
      this.is_moderator = checked;
      return;
    }
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
    payload.is_moderator = this.is_moderator;
    this._http.createRole(payload).subscribe({
      next: (res)=>{
      console.log('created role');
      this._router.navigate([`student/roles/list-roles`]);
    },
    error: (err) => console.log('role creation failed..!')});
  }
  
  public disableCheckBox(id:any){
    
      if(id.includes('Edit_Feed')){
        return true;
       }
      if (id.includes('Approval') || id.includes('Moderation')){
           if(id === 'Approval_Feed' || id === 'Moderation_Feed'){
             return false;
           } else { return true;}
      }
  }
}
