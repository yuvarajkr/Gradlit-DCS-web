import { Component, ViewEncapsulation } from '@angular/core';
import { StudentDataService } from '../../student-utils-services/student-data.service';
import { StudentHttpService } from '../../student-utils-services/student-http.service';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PostComponent {

  postType = "post";
  formFieldHelpers: string[] = [''];
  public studentForm;
  /* Constructor*/
  constructor(private _studentHttp:StudentHttpService,private _studentUtils:StudentDataService) {
    this.studentForm = this._studentUtils.getStudentPostForm();
  }


  removeImage(){
  }

  OnTypeSelect(type){
    this.postType = type;
    this.studentForm.get('type').setValue(type);
    this.postType === 'poll' &&  this.studentForm.get('poll_details').enable();
    this.postType === 'event' &&  this.studentForm.get('event_details').enable();
  }

  link = function (scope, element, attrs) {
    const input = element.find('#fileInput');
    const button = element.find('#uploadButton');

    if (input.length && button.length) {
        button.click((e) => input.click());
    }
  }

  public onCreateStudentPost(){
    this.studentForm.get('event_details').disable();
    this.studentForm.get('poll_details').disable();
    this._createPost();
  }

  private _createPost(){
    this._studentHttp.createPost(this.studentForm.getRawValue()).subscribe({
      next: (response)=>{
          console.log(response);
      } ,
      error : (err)=> {
        console.log(err);
      } 
    });
  }

  public onCreateEventOrPoll(){
    this._createPost();
  }
}
