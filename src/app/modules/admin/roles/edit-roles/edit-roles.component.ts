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

  permissionHeader: string[] = ['Module', 'Create', 'View', 'Edit', 'Delete', 'Approve'];
  roleFormGroup:any;
  rolesData:any;
  selectedRoleId:any;

  allModule = ['Feed','Events','Announcement','Circular','Clubs','Profile'];
  constructor(private _http:StudentHttpService,private _studentDataService:StudentDataService, private _router:Router, private _actvRoute:ActivatedRoute){

    this._http.getRolePermission(+this._actvRoute.snapshot.paramMap.get('id')).subscribe({
      next:(res:any)=>{
        this.selectedRoleId = +this._actvRoute.snapshot.paramMap.get('id');
        this.rolesData = res?.data[0].sub_modules;
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
      tempArr.splice(tempIndex,1);
      this.permission[i].actions =  tempArr.toString();
    } 
  }

  public onUpdateRole(){
    let payload = this.roleFormGroup.getRawValue();
    payload.permissions = this.permission;
    payload.is_add_role = false;
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
        case  1:
          (document.getElementById('Create'+ '_' +moduleName+'-input') as HTMLInputElement) .checked = true;
          this.setPermission(this.allModule.findIndex(ele => ele === moduleName),1);
          break;
          case  2:
            (document.getElementById('View' +'_'+ moduleName+'-input') as HTMLInputElement) .checked = true;
            this.setPermission(this.allModule.findIndex(ele => ele === moduleName),2);
          break;
          case  3:
            (document.getElementById('Edit' + '_'+moduleName+'-input') as HTMLInputElement) .checked = true;
            this.setPermission(this.allModule.findIndex(ele => ele === moduleName),3);
          break;
          case  4:
            (document.getElementById('Delete'+'_'+moduleName+'-input') as HTMLInputElement) .checked = true;
            this.setPermission(this.allModule.findIndex(ele => ele === moduleName),4);
          break;
          case  5:
            (document.getElementById('Approve'+'_'+moduleName+'-input') as HTMLInputElement) .checked = true;
            this.setPermission(this.allModule.findIndex(ele => ele === moduleName),5);
          break;
      }
    });

  });
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
