import { Component } from '@angular/core';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';



@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})


export class RolesComponent {
  roleFormGroup;

  constructor(private _studentDataService:StudentDataService){
    this.roleFormGroup = this._studentDataService.getRolesForm();
  }
  

}
