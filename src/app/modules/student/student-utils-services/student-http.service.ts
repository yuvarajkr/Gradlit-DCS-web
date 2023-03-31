import { Injectable } from '@angular/core';
import { GradlitHttpService } from 'app/services/gradlit-http.service';
import { CreateClubPayload, CreatePostPayload, ServerResponse } from '../student-intefaces/student-interfaces';


@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private _gradLitHttp:GradlitHttpService) { }

  public createPost(payload: CreatePostPayload){
    return this._gradLitHttp.post<ServerResponse>('/post',payload);
  }

  public getAllpost(){
    return this._gradLitHttp.get<{head:string,description:string}[]>('/post-list');
  }

  public getAllEvents(){
    return this._gradLitHttp.get<{eventDetails:string, date:string,time:string,location:string}[]>('/event-list');
  }

  public createClub(payload:CreateClubPayload){
    return this._gradLitHttp.post<{status:string,message:string}>('/club',payload);
  }

  public getAllClub(){
    return this._gradLitHttp.get<any[]>('club-list');
  }
}
