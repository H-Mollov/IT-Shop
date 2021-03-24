import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OffersService } from 'src/app/offers/offers.service';
import { UserService } from '../../user/user.service';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent {

  constructor(
    private user: UserService,
    private store: Store<any>,
    private offers: OffersService,
    private router: Router,
    private loader: CoreService
  ) { }

  isLogged;
  offers$ = this.offers;

  currentUser = this.store.subscribe((data: any) => {
    this.isLogged = data.login.Session ? data.login.Session : data.login.CurrentUser;
  });

  currentUserBoughtOffers;

  logoutUserHandler() {
    this.loader.showLoader();
    this.user.logoutUser().subscribe(() => {
      this.router.navigateByUrl('/user/login');
      window.location.reload();
    });
  }
}
