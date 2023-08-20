import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-add-new-department',
  templateUrl: './add-new-department.component.html',
  styleUrls: ['./add-new-department.component.scss']
})
export class AddNewDepartmentComponent {

  constructor(private _studentHttp:StudentHttpService, private _router:Router){}

  public departmentLogo: File;
  public departmentName : string;
  public departmentDesc : string;
  imageUrl: string | ArrayBuffer;
  
  public onFileUpload(event){
    const file:File = event.target.files[0];
    this.departmentLogo = file;
    let reader = new FileReader(); 
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.imageUrl = reader.result; 
      };
   }

  public onAddNewDepartment(){
    let postFormData =  new FormData();
    postFormData.append('name',this.departmentName );
    postFormData.append('description', this.departmentDesc);
    this.departmentLogo && postFormData.append('logo', this.departmentLogo);
    this._studentHttp.createDepartment(postFormData
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

}
