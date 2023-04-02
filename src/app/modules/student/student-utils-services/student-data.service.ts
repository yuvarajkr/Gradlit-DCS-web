import { Injectable } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  public onPostsChange = new Subject<{head:string,description:string}[]>();
  constructor(private _fb:FormBuilder) { }

  public getStudentPostForm(){
   return  this._fb.group({
      head:['',Validators.required],
      type: [0],
      event_details: this._fb.group({
        event_name: ['',Validators.required],
        event_description:['',Validators.required],
        venue:['',Validators.required],
        start_date:['',Validators.required],
        end_date:['',Validators.required],
        is_notification:[false,Validators.required],
        event_file : [null,Validators.required]
      }),
      poll_details: this._fb.group({
        question:['',Validators.required],
        option1:['',Validators.required],
        option2:['',Validators.required],
        poll_end_date:['',Validators.required],
        is_notification:[false,Validators.required],
      }),
      photos: [[]],
      files: [[]],
      vedios: [[]],
    });
  }

  public getCreateClubForm(){
    return this._fb.group({
      department_id :[],                                               
      user_id:[],                                                
      name :['', Validators.required],                                                
      description :['', Validators.required],                                                
      display_name :['' ,Validators.required],                                               
      allow_notices :[],                                                
      allow_events :[],                                                
      allow_delete_post:[],                                               
      allow_push_notification:[]                                                
    });
  }
}
