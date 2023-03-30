import { Injectable } from '@angular/core';
import { GradlitHttpService } from 'app/services/gradlit-http.service';
import { CreatePostPayload, ServerResponse } from '../student-intefaces/student-interfaces';


@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private _gradLitHttp:GradlitHttpService) { }

  public createPost(payload: CreatePostPayload){
    return this._gradLitHttp.post<ServerResponse>('/post',payload);
  }

  public getAllpost(){}
}
