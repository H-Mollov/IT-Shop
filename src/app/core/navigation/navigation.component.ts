import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/+store/actions';
import { OffersService } from 'src/app/offers/offers.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(
    private offer: OffersService,
    private store: Store<any>,
    private router: Router
  ) { }

  isLogged;
  currentUser = this.store.select(login).subscribe((data) => {
    this.isLogged = data.login.currentUser;
  })

  offerService = this.offer;
}
