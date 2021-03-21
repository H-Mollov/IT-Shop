import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
  ) { }

  isLogged;
  currentUser = this.store.subscribe((data) => {
    this.isLogged = data.login.currentUser;
  })

  offerService = this.offer;
}
