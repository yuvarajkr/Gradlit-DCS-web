import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.scss']
})
export class EditRolesComponent implements AfterViewInit {

   
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
  is_moderator = false;
  is_need_approval = false;

  permissionHeader: string[] = ['Module', 'Create', 'View', 'Edit', 'Delete', 'Approval','Moderation'];
  actions: string[] = ['Moderation', 'Create', 'View', 'Edit', 'Delete', 'Approval',];
  permissionHeaderToolTips: string[] = [
    'Modules in roles', 
    'Grants permission to create feeds, events, announcement, circular, clubs, profile to this role',
     'Grants permission to View modules to this role', 
     'Grants permission to Edit modules except Feeds module (only creater of feeds are allowed to edit)', 
     'Grants permission to Delete modules',
     'Needs Approval of content moderator to make any of this roles posts visible',
     'Grants permission to do content Moderation to this role'];
  roleFormGroup:any;
  rolesData:any;
  selectedRoleId:any;

  allModule = ['Feed','Events','Announcement','Circular','Clubs','Profile'];
  constructor(private _http:StudentHttpService,private _studentDataService:StudentDataService, private _router:Router, private _actvRoute:ActivatedRoute){

    this._http.getRolePermission(+this._actvRoute.snapshot.paramMap.get('id')).subscribe({
      next:(res:any)=>{
        this.selectedRoleId = +this._actvRoute.snapshot.paramMap.get('id');
        this.rolesData = res?.data[0].sub_modules;
        this.is_moderator = res?.data[0].is_moderator || false;
        this.assignAllPermissions(this.rolesData);
        //this.permission = res?.data[0].sub_modules;
        this.roleFormGroup.get('role_name').setValue(res?.data[0]?.name || 'Admin Test');
        this.roleFormGroup.get('description').setValue(res?.data[0]?.description || 'Admin Description');
        
        
      }, 
      error : (err) => {
        console.log(err);
        this.roleFormGroup.get('role_name').setValue('Admin Test');
        this.roleFormGroup.get('description').setValue('Admin Description');
        //this.assignAllPermissions(this.permission);
      }
    });

    this.roleFormGroup = this._studentDataService.getRolesForm();
  }
  ngAfterViewInit(): void {
    //this.assignAllPermissions(this.rolesData);
  }

  

  public onPermissionChange(checked:boolean, selectedPermission:string ){
    if(selectedPermission === 'Moderation_Feed') {
      this.is_moderator = true;
      this.is_need_approval = !this.is_moderator;
    }
    if(selectedPermission === 'Approval_Feed') {
      this.is_need_approval = true;
      this.is_moderator  = !this.is_need_approval;
    }
    let permissionType = selectedPermission.split('_')[0];
    let permIndex = this.actions.findIndex((eachPerm) => eachPerm === permissionType)+1;
    
    switch (selectedPermission.split('_').pop()) {
      case 'Feed':
        checked ? this.setPermission(0,permIndex) : this.removePermission(0,permIndex);
        if(this.is_need_approval || this.is_moderator) {
          setTimeout(() => {
            this.toggleApproveAndModerator()
          }, 100);
        }
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
      tempArr = [...new Set(tempArr)];
      this.permission[i].actions =  tempArr.toString();
    } else {
      this.permission[i].actions = this.permission[i].actions + permIndex;
    }
  }

  public removePermission(i,permIndex){
    if(this.permission[i].actions) {
      let tempArr = this.permission[i].actions.split(',');
      let tempIndex = tempArr.findIndex(eachele => eachele === String(permIndex));
      if(tempIndex >=0)tempArr.splice(tempIndex,1);
      this.permission[i].actions =  tempArr.toString();
    } 
  }

  public onUpdateRole(){
    let payload = this.roleFormGroup.getRawValue();
    payload.permissions = this.permission;
    payload.is_add_role = false;
    payload.is_moderator = this.is_moderator;
    payload.role_id = this.selectedRoleId;
    this._http.updateRole(payload).subscribe({
      next: (res)=>{
      console.log('created role');
      this._router.navigate([`student/roles/list-roles`]);
    },
    error: (err) => console.log('role creation failed..!')});
  }

  public assignAllPermissions(data){
  //   let data  =  [{
  //     "id": 2,
  //     "name": "Feed",
  //     "is_actions_allowed": true,
  //     "allowed_actions": [{
  //       "action_id": 5,
  //       "enable": true,
  //       "assigned": true
  //     }],
  //     "route": "",
  //     "api_route": "",
  //     "sub_modules": null
  //   },
  //   {
  //     "id": 3,
  //     "name": "Events",
  //     "is_actions_allowed": true,
  //     "allowed_actions": [{
  //         "action_id": 2,
  //         "enable": true,
  //         "assigned": true
  //       },
  //       {
  //         "action_id": 1,
  //         "enable": true,
  //         "assigned": true
  //       },
  //       {
  //         "action_id": 3,
  //         "enable": true,
  //         "assigned": true
  //       }
  //     ],
  //     "route": "",
  //     "api_route": "",
  //     "sub_modules": null
  //   }
  // ];

  data.forEach((eachEle) =>{
    let moduleName = eachEle.name;
    let allowedActions = eachEle.allowed_actions;
    allowedActions.forEach(eachAllowedAction => {
      
      switch (eachAllowedAction.action_id) {
        case 1:
          (document.getElementById('Moderation'+ '_' +moduleName+'-input') as HTMLInputElement) .checked = true;
          this.setPermission(this.allModule.findIndex(ele => ele === moduleName),1);
          break;
        case  2:
          (document.getElementById('Create'+ '_' +moduleName+'-input') as HTMLInputElement) .checked = true;
          this.setPermission(this.allModule.findIndex(ele => ele === moduleName),2);
          break;
          case  3:
            (document.getElementById('View' +'_'+ moduleName+'-input') as HTMLInputElement) .checked = true;
            this.setPermission(this.allModule.findIndex(ele => ele === moduleName),3);
          break;
          case  4:
            (document.getElementById('Edit' + '_'+moduleName+'-input') as HTMLInputElement) .checked = true;
            this.setPermission(this.allModule.findIndex(ele => ele === moduleName),4);
          break;
          case  5:
            (document.getElementById('Delete'+'_'+moduleName+'-input') as HTMLInputElement) .checked = true;
            this.setPermission(this.allModule.findIndex(ele => ele === moduleName),5);
          break;
          case  6:
            (document.getElementById('Approval'+'_'+moduleName+'-input') as HTMLInputElement) .checked = true;
            this.setPermission(this.allModule.findIndex(ele => ele === moduleName),6);
          break;
      }
    });

  });
  }

  public disableCheckBox(id:string){
    
    if(id.includes('Edit_Feed')){
      return true;
     }
     if (id.includes('Approval') || id.includes('Moderation')){
      if(id === 'Approval_Feed' || id === 'Moderation_Feed'){
        return false;
      } else { return true;}
 }
   
}

public toggleApproveAndModerator(){
  if(this.is_need_approval || this.is_moderator){
    if(this.is_need_approval) {
       (document.getElementById('Approval_Feed-input') as HTMLInputElement) .checked = true; 
      } else {
        (document.getElementById('Approval_Feed-input') as HTMLInputElement) .checked = false;
        this.removePermission(0,6);
      }
    if(this.is_moderator){
      (document.getElementById('Moderation_Feed-input') as HTMLInputElement) .checked = true
    } else {
      (document.getElementById('Moderation_Feed-input') as HTMLInputElement) .checked = false;
      this.removePermission(0,1);
    }
      
  }
  
}

}
