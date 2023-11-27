import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GradlitHttpService {
  baseUrl  = environment.apiURL + '/api';
  adminBaseUrl  = environment.adminBaseUrl + '/api';
  constructor(private _http:HttpClient) {
   }

   public get<D>(url:string,options?:{queryParams:{[key:string]:any}}){
      return this._http.get<D>(this.baseUrl+url);
   }

   public post<D>(url:string, payload:{[key:string]:any}){
    return this._http.post<D>(this.baseUrl+url,payload);
   }

   public adminGet<D>(url:string,options?:{queryParams:{[key:string]:any}}){
    return this._http.get<D>(this.adminBaseUrl+url);
 }

 public adminDelete<D>(url:string, payload?:{[key:string]:any}){
  return this._http.delete<D>(this.adminBaseUrl+url);
 }

 public adminPost<D>(url:string, payload:{[key:string]:any}){
  return this._http.post<D>(this.adminBaseUrl+url,payload);
 }

 public adminPut<D>(url:string, payload:{[key:string]:any}){
  return this._http.put<D>(this.adminBaseUrl+url,payload);
 }


}
