import { Component, ViewEncapsulation } from '@angular/core';
import { StudentDataService } from '../../student-utils-services/student-data.service';
import { StudentHttpService } from '../../student-utils-services/student-http.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PostComponent {

  public postType = "post";
  public postSubType = 0;
  formFieldHelpers: string[] = [''];
  public studentForm;
  public studentPostDocument: File;
  public studentPostPhoto: File;
  public studentPostVideo: File;
  student_event_file: File;
  imageUrl: string | ArrayBuffer;
  /* Constructor*/
  constructor(private _studentHttp:StudentHttpService,private _studentUtils:StudentDataService,private _dialogRef: MatDialogRef<PostComponent>) {
    this.studentForm = this._studentUtils.getStudentPostForm();
  }


  removeImage(){
  }

  closeDialog(){
    this._dialogRef.close();
  }

  OnTypeSelect(type){
    this.postType = type;
    
    //this.studentForm.get('type').setValue(type);
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
    this._createPost();
  }

  private _createPost(){
   let postFormData =  new FormData();
   this.studentPostDocument && postFormData.append('files', this.studentPostDocument);
   this.studentPostPhoto && postFormData.append('photos', this.studentPostPhoto);
   this.studentPostVideo && postFormData.append('vedios', this.studentPostVideo);
   postFormData.append('head', this.studentForm.get('head').value);
   postFormData.append('type', ''+this.postSubType);
    this._studentHttp.createPost(postFormData
    ).subscribe({
      next: (response)=>{
        this.closeDialog();
          console.log(response);
      } ,
      error : (err)=> {
        console.log(err);
      } 
    });
  }

  public onCreateEventOrPoll(){
    let postFormData =  new FormData();
    this._studentHttp.createPost(this.postType === 'poll' ? this. _populateCreatePollPayload() :  this._populateCreateEventPayload(postFormData)
      ).subscribe({
        next: (response)=>{
            console.log(response);
            this.closeDialog();
        } ,
        error : (err)=> {
          console.log(err);
        } 
      });
  }

  private _populateCreateEventPayload(postFormData:FormData):FormData{
    this.student_event_file && postFormData.append('event_file', this.student_event_file);
    postFormData.append('head', this.studentForm.get('event_details').get('event_name').value);
    postFormData.append('post_type', ''+this.postSubType);
    postFormData.append('event_type', '2');
    postFormData.append('event_name', ''+this.studentForm.get('event_details').get('event_name').value);
    postFormData.append('event_description', ''+this.studentForm.get('event_details').get('event_description').value);
    postFormData.append('venue', ''+this.studentForm.get('event_details').get('venue').value);
    postFormData.append('start_date', new Date(this.studentForm.get('event_details').get('start_date').value).toISOString().replace('T',' ').replace('0Z',''));
    postFormData.append('end_date', new Date(this.studentForm.get('event_details').get('end_date').value).toISOString().replace('T',' ').replace('0Z',''));
    postFormData.append('is_notification', ''+(this.studentForm.get('event_details').get('is_notification').value + 0));
    return postFormData;
  }

  private _populateCreatePollPayload(){
      const now = new Date();
      let pollPayload = this.studentForm.get('poll_details').value;
      now.setDate(now.getDate() + pollPayload.poll_end_date * 7);
      pollPayload.poll_end_date = now.toISOString().replace('T',' ').split('.')[0] + '.00';
      pollPayload.head = pollPayload.question;
      pollPayload.type = 5; // poll type
      pollPayload.is_notification = ''+(pollPayload.is_notification + 0);
      
       
      return pollPayload;
  }

  public onFileUpload(event,postSubType){
   if(postSubType === 2){
    this.postSubType = postSubType;
    const file:File = event.target.files[0];
    this.studentPostDocument = file;
   } else if(postSubType === 1){
    this.postSubType = postSubType;
    const file:File = event.target.files[0];
    this.studentPostPhoto = file;
    let reader = new FileReader(); 
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.imageUrl = reader.result; 
      };
   } else if(postSubType === 3){
    this.postSubType = postSubType;
    const file:File = event.target.files[0];
    this.studentPostVideo = file;
   } else if(postSubType === 4){
    this.postSubType = postSubType;
    const file:File = event.target.files[0];
    this.student_event_file = file;
   }
   
  }
}
