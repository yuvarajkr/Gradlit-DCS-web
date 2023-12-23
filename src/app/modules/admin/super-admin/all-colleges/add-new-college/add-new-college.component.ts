import { Component } from '@angular/core';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';

@Component({
  selector: 'app-add-new-college',
  templateUrl: './add-new-college.component.html',
  styleUrls: ['./add-new-college.component.scss']
})
export class AddNewCollegeComponent {
  
  constructor(private _studentData:StudentDataService, private _http:StudentHttpService){
    
  }

  public collegeName = '';
  public collegeDesc = '';
  public collegeLogo: File;
  public email = '';
  public collegeDisplayName = '';
  imageUrl: string | ArrayBuffer;
  public selectedUsersID = '';

  public onFileUpload(event){
    const file:File = event.target.files[0];
    this.collegeLogo = file;
    let reader = new FileReader(); 
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.imageUrl = reader.result; 
      };
   }

   public onAddcollege(){
    let postFormData =  new FormData();
    postFormData.append('name',this.collegeName );
    postFormData.append('description', this.collegeDesc);
    postFormData.append('email', this.email);
    this.collegeLogo && postFormData.append('logo', this.collegeLogo);
    // this._http.createcollegeByAdmin(postFormData
    //   ).subscribe({
    //     next: (response)=>{
    //         console.log(response);
    //         //this._router.navigate([`student/add-colleges/list-colleges`]);
    //     } ,
    //     error : (err)=> {
    //       console.log(err);
    //       //this._router.navigate([`student/add-colleges/list-colleges`]);
    //     } 
    //   });
   }
}
