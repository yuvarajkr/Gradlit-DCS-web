import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    /**
     * Constructor
     */
    constructor(private _authService: AuthService)
    {
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        // Clone the request object
        let newReq = req.clone();

        // Request
        //
        // If the access token didn't expire, add the Authorization header.
        // We won't add the Authorization header if the access token expired.
        // This will force the server to return a "401 Unauthorized" response
        // for the protected API routes which our response interceptor will
        // catch and delete the access token from the local storage while logging
        // the user out from the app.
        if ( this._authService.accessToken && !AuthUtils.isTokenExpired(this._authService.accessToken) )
        {
            newReq = req.clone({
                //headers: req.headers.set('Authorization', 'Bearer ' + this._authService.accessToken)
                setHeaders: {
                    //Authorization :'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMjE2NTQwLCJpYXQiOjE2ODAxOTg1NDAsImp0aSI6IjE1NGY2Y2I3ODNhZDRhNjZiYjBkMzMyYTYzZWJiYjFjIiwidXNlcl9pZCI6M30.vCK6Vw8aCIgyImHwe3xhlKry4s5J2Z84Z5WnOfa0dquK1Nh3hZF6t-RDYFhBm3d3GAB3jecJq6QFC39hW3JzOA"
                    Authorization :"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNDgyODYyLCJpYXQiOjE2ODA0NjQ4NjIsImp0aSI6ImQ3ZGI4ZDNkODlkMjRjZGI4Mzc2NzNlYmFhMTQ0YzgyIiwidXNlcl9pZCI6M30.TNmmzKts2eZbsbTqapYKAMaXmi3XIDl3V9kjFF0_5_C_atI7w7WX2F8hSKB0Gi32BzjOWksYbYMdkqkk_Pz19Q"
                }
            });
            
        }

        // Response
        return next.handle(newReq).pipe(
            catchError((error) => {

                // Catch "401 Unauthorized" responses
                if ( error instanceof HttpErrorResponse && error.status === 401 )
                {
                    // Sign out
                    this._authService.signOut();

                    // Reload the app
                    location.reload();
                }

                return throwError(error);
            })
        );
    }
}
