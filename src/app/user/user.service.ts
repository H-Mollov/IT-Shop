import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

import { environment as env } from '../../environments/environment'
import { Store } from '@ngrx/store';
import { login } from '../+store/actions'
import { Observable } from 'rxjs';

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

  checkSession(currentSessionId = localStorage.getItem('sessionToken')) {
    let currentUser;
    this.store.select(login).subscribe(data => currentUser = data.login.currentUser);

    if (currentUser) {
      return new Observable;
    };

    if (currentSessionId) {
      return this.http.get(`${env.apiURL}${env.endPoints.authenticate}`, {
        headers: new HttpHeaders({
          'X-Parse-Application-Id': env.applicationID,
          'X-Parse-REST-API-Key': env.restAPIkey,
          'X-Parse-Session-Token': currentSessionId,
          'Content-Type': 'application/json'
        })
      }).pipe(
        tap((data: any) => {
          const currentDate = new Date().getTime();
          const expirationDate = new Date(data.expiresAt.iso).getTime()

          if (currentSessionId && expirationDate - currentDate > 0) {
            this.store.dispatch(login({
              userId: data.user.objectId,
              sessionToken: data.sessionToken,
            }))
          } else {
            localStorage.removeItem('sessionToken')
          }
        }),
        catchError((err) => { throw new Error(err) })
      )
    }
  }
}
