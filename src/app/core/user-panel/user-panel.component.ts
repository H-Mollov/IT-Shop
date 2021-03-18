import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, likedOffers, boughtOffers } from 'src/app/+store/actions';
import { OffersService } from 'src/app/offers/offers.service';
import { UserService } from '../../user/user.service';

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
    private router: Router
  ) { }

  isLogged;
  offers$ = this.offers;

  currentUser = this.store.select(login).subscribe((data) => {
    this.isLogged = data.login.Session ? data.login.Session : data.login.CurrentUser;
  });
  currentUserLikedOffers;
  currentUserBoughtOffers;

  logoutUserHandler() {
    this.user.logoutUser().subscribe(() => {
      this.router.navigateByUrl('/user/login');
      window.location.reload();
    });
  }

  likedOffersHandler() {
    this.store.subscribe((data) => {
      this.currentUserLikedOffers = data.login.CurrentUser.likedOffers;
    });

    this.offers.getOffersByIdArray(this.currentUserLikedOffers).subscribe((data: any) => {
      this.store.dispatch(likedOffers(data));
      this.router.navigateByUrl('/likedOffers');
    });
  }

  boughtOffersHandler() {
    this.store.subscribe((data) => {
      this.currentUserBoughtOffers = data.login.CurrentUser.boughtOffers;
    });

    this.offers.getOffersByIdArray(this.currentUserBoughtOffers).subscribe((data: any) => {
      this.store.dispatch(boughtOffers(data));
      this.router.navigateByUrl('/boughtOffers');
    });
  }
}
