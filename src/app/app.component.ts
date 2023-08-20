import { Component } from '@angular/core';
import { StudentHttpService } from './modules/student/student-utils-services/student-http.service';
import { environment } from './environments/environment';
@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    /**
     * Constructor
     */

    auth_code ='';
    constructor(private _studentHttp:StudentHttpService)
    {

        this._studentHttp.getAuthCode().subscribe((res:any)=>{
                this.auth_code = res.data.auth_code;
                this.getAccessTokenFromAuth(this.auth_code);
        })
    }

    public getAccessTokenFromAuth(auth_code){
            
        this._studentHttp.getAcessToken(auth_code).subscribe({
            next:(authdata:any)=>{
                environment.authToken = authdata.data?.[0]?.token.access;
                environment.adminToken = authdata.data?.[0]?.token.admin_token;
            },
            error:(err)=>{
                console.log(err);
            }
        })
    }
}
