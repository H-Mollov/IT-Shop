import { Component, OnChanges } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OffersService } from 'src/app/offers/offers.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnChanges {

  constructor(
    private offer: OffersService,
    private store: Store<any>,
    private router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.menuButtonIsToggled = false;
        this.menuIsHidden = false;
      }
    })
  }

  isLogged;
  menuButtonIsToggled: boolean = false;
  menuIsHidden: boolean = false;

  toggleMenu() {
    if (this.menuButtonIsToggled) {
      this.menuButtonIsToggled = false;
      this.menuIsHidden = false;
    } else {
      this.menuButtonIsToggled = true
      this.menuIsHidden = true;
    }
  }

  currentUser = this.store.subscribe((data) => {
    this.isLogged = data.login.Session;
  })

  offerService = this.offer;

  ngOnChanges(): void {

  }
}
