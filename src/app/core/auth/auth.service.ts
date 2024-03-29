import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { StudentHttpService } from 'app/modules/student/student-utils-services/student-http.service';
import { StudentDataService } from 'app/modules/student/student-utils-services/student-data.service';

@Injectable()
export class AuthService
{
    private _authenticated: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private _studentHttp : StudentHttpService,
        private _studentDataService:StudentDataService
    )
    {
        this._userService.user = {
            id    : 'cfaad35d-07a3-4447-a6c3-d8c3d54fd5df',
            name  : 'Brian Hughes',
            email : 'hughes.brian@company.com',
            avatar: 'assets/images/avatars/brian-hughes.jpg',
            status: 'online'
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    /**
     * Setter & getter for admin token
     */
    set adminToken(token: string)
    {
        localStorage.setItem('adminToken', token);
    }

    get adminToken(): string
    {
        return localStorage.getItem('adminToken') ?? '';
    }

    

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any>
    {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any>
    {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { email: string; password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        

        return this._httpClient.post('api/auth/sign-in', credentials).pipe(
            switchMap((response: any) => {
                //this.accessToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJyb2xlX2lkIjoxLCJ1dWlkIjoiZTYwYzU3NDYtYjY0MS00ZTJhLThhNzUtYzg3ZmI0NTVhN2VjIiwiZXhwIjoxODIwNzQwNDUxfQ.4Z8ToI7NWXQnmFwCGDMdLIbV8Y9cIkmI88zv6UpxkLc';
                
                return this._studentHttp.login(credentials).pipe(
                    switchMap((realData: any) => {
        
                        // Store the access token in the local storage
                        // this.accessToken = realData?.data[0].token.access;
                        this.accessToken = realData?.data?.token;
                        // this.adminToken = realData?.data[0].token.admin_token;
                        this.adminToken = realData?.data?.token;
        
                        // Set the authenticated flag to true
                        this._authenticated = true;
        
                        // Store the user on the user service
                        let userDetails = {
                            id: realData?.data?.id || response.user.id,
                            name: realData?.data?.name || response.user.name,
                            email: realData?.data?.email || response.user.email,
                            avatar: realData?.data?.photo || response.user.avatar
                        }
                        this._userService.user = userDetails;
                        localStorage.setItem('user',JSON.stringify(userDetails));
                        localStorage.setItem('userPermission',JSON.stringify(realData?.data?.permissions[0]?.sub_modules))
                        this._studentDataService.userPermissions = realData.data.permissions[0].sub_modules;
                        //response.accessToken = realData?.data[0].token.admin_token;
        
                        // Return a new observable with the response
                        return of({...response,...realData});

                    })
                );
            })
        );
    }


    loginUsingToken(): Observable<any> {
        return this._httpClient.post('api/auth/sign-in-with-token', {

        }).pipe(
            catchError(() =>
                of(false)
            ), 
            switchMap((response: any) => {
                console.log('response', response);
            return response;
        })
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any>
    {
        // Sign in using the token
        return this._httpClient.post('api/auth/sign-in-with-token', {
            accessToken: this.accessToken
        }).pipe(
            catchError(() =>

                // Return false
                of(false)
            ),
            switchMap((response: any) => {

                // Replace the access token with the new one if it's available on
                // the response object.
                //
                // This is an added optional step for better security. Once you sign
                // in using the token, you should generate a new one on the server
                // side and attach it to the response object. Then the following
                // piece of code can replace the token with the refreshed one.
                if ( response.accessToken )
                {
                    this.accessToken = response.accessToken;
                }

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;

                // Return true
                return of(true);
            })
        );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any>
    {
        // Remove the access token from the local storage
        localStorage.removeItem('accessToken');
        localStorage.clear();

        // Set the authenticated flag to false
        this._authenticated = false;

        // Return the observable
        return of(true);
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean>
    {
        // Check if the user is logged in
        if ( this._authenticated )
        {
            return of(true);
        }

        // Check the access token availability
        if ( !this.accessToken )
        {
            return of(false);
        }

        // Check the access token expire date
        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
