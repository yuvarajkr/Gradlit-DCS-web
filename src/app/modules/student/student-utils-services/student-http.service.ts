import { Injectable } from '@angular/core';
import { GradlitHttpService } from 'app/services/gradlit-http.service';
import { CreateAnnouncementsPayload, CreateClubPayload, CreatePostPayload, ServerResponse } from '../student-intefaces/student-interfaces';


@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private _gradLitHttp:GradlitHttpService) { }

  public createPost(payload: FormData){
    return this._gradLitHttp.post<ServerResponse>('/post',payload);
  }

  public getAllpost(){
    return this._gradLitHttp.get<{data:{results:{head:string,type:string,created_by:{id:string,name:string},created_at:string}[]}}>('/post-list');
  }

  public getAllEvents(){
    return this._gradLitHttp.get<{eventDetails:string, date:string,time:string,location:string}[]>('/event-list');
  }

  public createClub(payload:CreateClubPayload){
    return this._gradLitHttp.post<{status:string,message:string}>('/club',payload);
  }

  public getAllClub(){
    return this._gradLitHttp.get<any>('/club-list');
  }

  public createAnnouncements(payload:CreateAnnouncementsPayload){
    return this._gradLitHttp.post('/announcement',payload);
  }

  public getAllAnnouncements(){
    return this._gradLitHttp.get<any>('/announcement-list');
  }
}
