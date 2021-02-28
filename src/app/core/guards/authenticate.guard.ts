import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../user/user.service';
import { environment as env } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(
    private router: Router,
    private user: UserService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const sessionToken = localStorage.getItem('sessionToken');

    if (sessionToken) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
