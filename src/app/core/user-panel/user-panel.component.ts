import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/+store/actions';
import { OffersService } from 'src/app/offers/offers.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit, OnDestroy {

  constructor(
    private user: UserService,
    private store: Store<any>,
    private offers: OffersService,
    private router: Router
  ) { }

  isLogged;
  offers$ = this.offers;

  Subscriptions = [];
  currentUser = this.store.select(login).subscribe((data) => {
    this.isLogged = data.login.currentUser;
  })
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach(sub => sub.unsubscribe());
  }
}
