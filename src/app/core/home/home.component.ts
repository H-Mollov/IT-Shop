import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/user/user.service';
import { OffersService } from '../../offers/offers.service';
import { authenticate } from '../../+store/actions'
import { CoreService } from '../core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private user: UserService,
    private offers: OffersService,
    private store: Store,
    private loader: CoreService
  ) { }

  @ViewChild('promoElement') promoElementHTML;
  promoOffers: Array<any>;
  bestSellers: Array<any>;
  displayedPromoOffer;
  switchCounterId;

  ngOnInit(): void {
    this.loader.showLoader();
    this.user.checkSession();
    this.offers.getPromoOffers().subscribe((data) => {
      this.promoOffers = data.results;
      this.displayedPromoOffer = data.results[0];
    });

    if (localStorage.getItem('sessionToken')) {
      this.user.getCurrentUser().subscribe((data) => {
        this.store.dispatch(authenticate(data));
      });
    }
    
    this.offers.getBestSellerOffers().subscribe((data) => {
      this.bestSellers = data.results;
      this.loader.hideLoader();
    });
    this.switchCounterId = setInterval(() => { this.nextOffer(); }, 7000)
  }

  ngOnDestroy(): void {
    clearInterval(this.switchCounterId)
  }

  nextOffer() {
    this.promoElementHTML.nativeElement.style.opacity = 0;

    setTimeout(() => {
      const firstOffer = this.promoOffers.shift();
      this.displayedPromoOffer = this.promoOffers[0];
      this.promoOffers.push(firstOffer);
      this.promoElementHTML.nativeElement.style.opacity = 1;
      clearInterval(this.switchCounterId);
      this.switchCounterId = setInterval(() => { this.nextOffer(); }, 7000)
    }, 1000)

  }

  previousOffer() {
    this.promoElementHTML.nativeElement.style.opacity = 0;

    setTimeout(() => {
      const lastOffer = this.promoOffers.pop();
      this.promoOffers.unshift(lastOffer);
      this.displayedPromoOffer = this.promoOffers[0];
      this.promoElementHTML.nativeElement.style.opacity = 1;
      clearInterval(this.switchCounterId);
      this.switchCounterId = setInterval(() => { this.nextOffer(); }, 7000)
    }, 1000)
  }
}
