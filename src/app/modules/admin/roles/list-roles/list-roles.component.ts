import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';
import { RoleNotificationComponent } from '../role-notification/role-notification.component';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';

export interface RoleDetails {
  name: string;
  TotalUser?: string;
  CreatedBy?: string;
  id:number
}

export const products = [];

// export const products: RoleDetails[] = [
//   {
//     name: 'Admin',
//     TotalUser: '100',
//     CreatedBy: 'Admin',
//     id:1
//   },
//   {
//     name: 'HOD',
//     TotalUser: '10',
//     CreatedBy: 'Admin',
//     id:2
//   },
//   {
//     name: 'Dept Head',
//     TotalUser: '4',
//     CreatedBy: 'Admin',
//     id:3
//   },
//   {
//     name: 'Group Admin',
//     TotalUser: '10',
//     CreatedBy: 'Admin',
//     id:4
//   },

// ];

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss']
})


export class ListRolesComponent implements OnInit {

  
  displayedColumns = ['name', 'Actions', 'add_users'];
  products: RoleDetails[] = products;
  dataSource = products;

  constructor(private _http:StudentHttpService,private _router:Router,private _matDialog:MatDialog,private _studentDataService:StudentDataService){
    
  }

  ngOnInit(): void {
    this._http.getAllRoles().subscribe({
      next: (allRoles:any) => {
          this.products = allRoles.data;
          this.dataSource = this.products;
      },
      error: (err)=>{
        console.log('fetching roles failed...');
      }
    })
  }
  onNavigate(productCode) {
    console.log(`product code ${productCode}`)
  }

  filterProduct(value: string): void {
      // TODO
  }

  onClickEdit(roleDetails:any){
    this._studentDataService.selectedRoleData = roleDetails;
    this._router.navigate([`/student/roles/edit-roles/${roleDetails.id}`]);
    //this._router.navigate(['/student/profile']);
  }

  onClickDelete(roleId:any,element:any){
    if(element.UserCount !== 0){
      this.notifiyLoadedUserDelete('');
      return;
    }
      this._http.deleteRole(roleId).subscribe({
        next:(res)=> {
            console.log(res);
            this._http.getAllRoles().subscribe({
              next: (allRoles:any) => {
                  this.products = allRoles.data;
                  this.dataSource = this.products;
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

  public onRoleClick(roleDetails:any){
    this._router.navigate([`/student/roles/add-users-to-role/${roleDetails.id}`,{name:roleDetails.Name, description:roleDetails.Description,id:roleDetails.id}]);
  }

  public notifiyLoadedUserDelete(dataType:string): void
  {
    const dialogRef =  this._matDialog.open(RoleNotificationComponent, {
      autoFocus: false,
      maxHeight: '80vh',
      width: '30vw',
      data     : {
         type: dataType
      }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }



}
