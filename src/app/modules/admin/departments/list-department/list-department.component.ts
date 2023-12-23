import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

export interface RoleDetails {
  name: string;
  TotalUser?: string;
  CreatedBy?: string;
  id:number
}

export const products = [];

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.scss']
})
export class ListDepartmentComponent {

  
  displayedColumns = ['DepartmentName','Department_ID','Actions'];
  products: RoleDetails[] = products;
  dataSource = products;

  constructor(private _http:StudentHttpService,private _router:Router){
    
  }

  ngOnInit(): void {
    this._http.getAllDepartments().subscribe({
      next: (allDeps:any) => {
          this.products = allDeps.data;
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
    this._router.navigate([`/student/departments/edit-department/${roleDetails.Id}` , {name:roleDetails.Name, description:roleDetails.Description,logo:roleDetails.Logo}]);
    //this._router.navigate(['/student/profile']);
  }

  onClickDelete(roleId:any){
      this._http.deleteDepartment(roleId).subscribe({
        next:(res)=> {
            console.log(res);
            this._http.getAllDepartments().subscribe({
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





}
