import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { environment } from 'app/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GradlitHttpService {
  baseUrl  = environment.apiURL + '/api';
  constructor(private _http:HttpClient,private _authService: AuthService) {
   }

   public get<D>(url:string,options?:{queryParams:{[key:string]:any}}){
      return this._http.get<D>(this.baseUrl+url);
   }

   public post<D>(url:string, payload:{[key:string]:any}){
    return this._http.post<D>(this.baseUrl+url,payload);
   }
}
