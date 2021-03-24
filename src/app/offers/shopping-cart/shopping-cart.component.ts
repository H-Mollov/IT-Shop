import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/user/user.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private user: UserService,
    private offers: OffersService,
    private loader: CoreService
  ) { }

  boughtOffers;

  ngOnInit(): void {
    this.loader.showLoader();
    this.user.getCurrentUser()
      .pipe(take(1))
      .subscribe((data: any) => {
        if (data.boughtOffers) {
          this.offers.getOffersByIdArray(data.boughtOffers)
            .pipe(take(1))
            .subscribe((data: any) => {
              this.boughtOffers = data.results;
              this.loader.hideLoader();
            })
        } else {
          this.boughtOffers = [];
          this.loader.hideLoader();
        }
      });
  }
}
