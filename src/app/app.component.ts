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
    constructor(private _studentHttp:StudentHttpService)
    {

        this._studentHttp.getAcessToken().subscribe({
            next:(authdata:any)=>{
                environment.authToken = authdata.data?.[0]?.token.access;
            },
            error:(err)=>{
                console.log(err);
            }
        })
    }
}
