import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authenticate } from '../../+store/actions';
import { Observable } from 'rxjs';
import { UserService } from '../../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(
    private router: Router,
    private user: UserService,
    private store: Store
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const sessionToken = localStorage.getItem('sessionToken');

    if (sessionToken) {
      this.user.getCurrentUser().subscribe((data: any) => {
        this.store.dispatch(authenticate(data));
      });
      this.user.checkSession();
      
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}