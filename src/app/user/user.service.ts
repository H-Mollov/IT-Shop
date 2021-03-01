import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

import { environment as env } from '../../environments/environment'
import { Store } from '@ngrx/store';
import { login } from '../+store/actions'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private store: Store<any>
  ) { }

  loginHeaders = new HttpHeaders({
    'X-Parse-Application-Id': env.applicationID,
    'X-Parse-REST-API-Key': env.restAPIkey,
    'X-Parse-Revocable-Session': '1',
    'Content-Type': 'application/json'
  })

  login(loginData) {
    return this.http.get(`${env.apiURL}${env.endPoints.login}`, {
      headers: this.loginHeaders,
      params: new HttpParams()
        .set('username', loginData.username)
        .set('password', loginData.password)
    }).pipe(
      tap((data: any) => {
        this.store.dispatch(login({
          userId: data.objectId,
          sessionToken: data.sessionToken
        }));
      }),
      catchError((err) => { throw new Error(err) })
    )
  }
}
