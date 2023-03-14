import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'app/environments/environment';
import { DataService } from 'app/services/data.service';

@Injectable({
  providedIn: 'root'
})

export class SignInService { 

    constructor() { }

}
