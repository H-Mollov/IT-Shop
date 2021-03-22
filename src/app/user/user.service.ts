import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';

import { environment as env } from '../../environments/environment'
import { Store } from '@ngrx/store';
import { login } from '../+store/actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private store: Store<any>,
    private route: Router
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

  checkCurrentSession(currentSessionId = localStorage.getItem('sessionToken')) {
    let currentUser;
    this.store.subscribe((data: any) => {
      currentUser = data.login.Session
    });

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
      })
    }
  }

  checkSession(currentSessionId = localStorage.getItem('sessionToken')) {
    if (currentSessionId) {
      this.checkCurrentSession().subscribe((data: any) => {
        const currentDate = new Date().getTime();
        const expirationDate = new Date(data.expiresAt.iso).getTime()

        if (expirationDate - currentDate > 0) {
          this.store.dispatch(login({
            userId: data.user.objectId,
            sessionToken: data.sessionToken,
          }))
        } else {
          localStorage.removeItem('sessionToken');
          this.route.navigateByUrl('/home');
        }
      })
    }
  }

  getCurrentUser(currentSessionId: string = localStorage.getItem('sessionToken')) {
    return this.http.get(`${env.apiURL}${env.endPoints.user}/me`, {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': env.applicationID,
        'X-Parse-REST-API-Key': env.restAPIkey,
        'X-Parse-Session-Token': currentSessionId,
        'Content-Type': 'application/json'
      })
    })
  }

  updateUser(userData, userId, currentSessionId = localStorage.getItem('sessionToken')) {
    return this.http.put(`${env.apiURL}${env.endPoints.user}/${userId}`, userData, {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': env.applicationID,
        'X-Parse-REST-API-Key': env.restAPIkey,
        'X-Parse-Session-Token': currentSessionId,
        'Content-Type': 'application/json'
      })
    })
  }

  logoutUser() {
    const currentSessionId = localStorage.getItem('sessionToken');
    localStorage.removeItem('sessionToken');

    return this.http.post(`${env.apiURL}${env.endPoints.logout}`, {}, {
      headers: new HttpHeaders({
        'X-Parse-Application-Id': env.applicationID,
        'X-Parse-REST-API-Key': env.restAPIkey,
        'X-Parse-Session-Token': currentSessionId,
        'Content-Type': 'application/json'
      })
    })
  }
}
