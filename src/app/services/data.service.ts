import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'app/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverUrl = environment.apiURL + '/api';
  allDepartments: any;

  constructor(private http: HttpClient) { }

  getData(endPoint: string): any {
    const vm = this;
    return vm.http.get(vm.serverUrl + endPoint).pipe(
      retry(0),
      map(res => {
        return res;
      }),
      catchError(err => {
        return vm.handleError(err, vm);
      })
    );
  }

  postData(endPoint: string, data: any): any {
    const vm = this;
    return vm.http.post(vm.serverUrl + endPoint, data).pipe(
      retry(0),
      map(res => {
        return res;
      }),
      catchError(err => {
        return vm.handleError(err, vm);
      })
    );
  }

  putData(endPoint: string, data: any): any {
    const vm = this;
    return vm.http.put(vm.serverUrl + endPoint, data).pipe(
      retry(0),
      map(res => {
        return res;
      }),
      catchError(err => {
        return vm.handleError(err, vm);
      })
    );
  }

  handleError(error: HttpErrorResponse, vm: any): any {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  setAllDepartments(deps){
    this.allDepartments = deps;
  }
}
