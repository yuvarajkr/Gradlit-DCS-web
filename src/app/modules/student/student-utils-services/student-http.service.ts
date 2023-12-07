import { Injectable } from '@angular/core';
import { GradlitHttpService } from 'app/services/gradlit-http.service';
import { CreateAnnouncementsPayload, CreateCircularPayload, CreateClubPayload, CreatePostPayload, ServerResponse } from '../student-intefaces/student-interfaces';


@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private _gradLitHttp:GradlitHttpService) { }

  public createPost(payload: FormData){
    return this._gradLitHttp.adminPost<ServerResponse>('/post',payload);
  }

  public getAllpost(){
    return this._gradLitHttp.adminGet<{data:{rows:{head:string,post_type:string,created_by:{id:string,name:string},created_at:string}[]}}>('/post');
  }

  public getAllEvents(){
    return this._gradLitHttp.adminGet<{eventDetails:string, date:string,time:string,location:string}[]>('/event');
  }

  public createClub(payload:CreateClubPayload){
    return this._gradLitHttp.post<{status:string,message:string}>('/club',payload);
  }

  public getAllClub(){
    return this._gradLitHttp.adminGet<any>('/club');
  }

  public  createCirculars(payload:FormData){
    return this._gradLitHttp.post('/circular',payload);
  }

  public  createAnnouncement(payload:FormData){
    return this._gradLitHttp.post('/announcement',payload);
  }

  public getAllAnnouncements(){
    return this._gradLitHttp.get<any>('/announcement-list');
  }

  public getAllCircualrs(){
    return this._gradLitHttp.adminGet<any>('/circular');
  }


  public getAuthCode(){
    return this._gradLitHttp.post('/get-direct-login-token',{
      "email":"admin@admin.com"
  });
  }
  

  public getAcessToken(auth_code){
    
    return this._gradLitHttp.post('/direct-login',{
      "auth_code":auth_code
  });
  }

  public createRole(payload: {
    role_name: string,
    is_add_role: boolean,
    permissions: {
      mod_id: number,
      actions: string
    }[]
  }) {
      return this._gradLitHttp.adminPost('/add-role-permissions', payload);
  }

  public updateRole(payload: {
    role_name: string,
    is_add_role: boolean,
    permissions: {
      mod_id: number,
      actions: string
    }[]
  }) {
      return this._gradLitHttp.adminPost('/add-role-permissions', payload);
  }

  public getAllRoles(){
    return this._gradLitHttp.adminGet('/get-roles');
  }

  public getRolePermission(role_id:number){
    return this._gradLitHttp.adminGet(`/get-role-permissions/${role_id}`);
  }

  public deleteRole(role_id:number){
    return this._gradLitHttp.adminDelete(`/delete-role/${role_id}`);
  }

  public getAllDepartments(){
    return this._gradLitHttp.adminGet('/department');
  }

  public createDepartment(payload){
    return this._gradLitHttp.adminPost('/department', payload);
  }

  public deleteDepartment(dep_id:number){
    return this._gradLitHttp.adminDelete(`/department/${dep_id}`);
  }

  public updateDepartment(payload){
    return this._gradLitHttp.adminPut(`/department`, payload);
  }

  public addUsersToRole(payload){
    return this._gradLitHttp.adminPost('/bulk-role-assign', payload);
  }

  public getUsersOfRoleId(id){
    return this._gradLitHttp.adminGet(`/get-role-users/${id}`);
  }

  public getSearchedUsers(searchKey:string){
    return this._gradLitHttp.adminGet(`/get-users/${searchKey}`);
  }

  public createClubByAdmin(payload){
    return this._gradLitHttp.adminPost('/club', payload);
  }

  public updateClubByAdmin(payload){
    return this._gradLitHttp.adminPut('/club', payload);
  }

  public getAllClubsByAdmin(){
    return this._gradLitHttp.adminGet('/club');
  }

  public deleteClubByAdmin(club_id:number){
    return this._gradLitHttp.adminDelete(`/delete-role/${club_id}`);
  }

  public adminLogin(payload){
    return this._gradLitHttp.post('/login',payload);
   }
}
