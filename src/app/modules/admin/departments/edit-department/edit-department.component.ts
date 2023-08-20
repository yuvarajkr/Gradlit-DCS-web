import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent {

  public departmentLogo: File;
  public departmentName : string;
  public departmentDesc : string;
  public departmentId: string;
  imageUrl: string | ArrayBuffer;

  constructor(private _http:StudentHttpService, private _route:ActivatedRoute, private _router:Router){

    this._http.getAllDepartments().subscribe({
      next: (allRoles:any) => {
          // this.products = allRoles.data;
          // this.dataSource = this.products;
          this.departmentName = this._route.snapshot.params.name;
          this.departmentDesc = this._route.snapshot.params.description;
          this.departmentLogo = this._route.snapshot.params.logo;
          this.departmentId = this._route.snapshot.params.id;
      },
      error: (err)=>{
        console.log('fetching roles failed...');
      }
    })

  }

  public onUpdateDepartment(){
    let postFormData =  new FormData();
    postFormData.append('name',this.departmentName );
    postFormData.append('description', this.departmentDesc);
    postFormData.append('id', this.departmentId);
    this.departmentLogo && postFormData.append('logo', this.departmentLogo);
    this._http.updateDepartment(postFormData
      ).subscribe({
        next: (response)=>{
            console.log(response);
            this._router.navigate([`student/departments/list-departments`]);
        } ,
        error : (err)=> {
          console.log(err);
        } 
      });

  }

  public onFileUpload(event){
    const file:File = event.target.files[0];
    this.departmentLogo = file;
    let reader = new FileReader(); 
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.imageUrl = reader.result; 
      };
   }
  

  

}
