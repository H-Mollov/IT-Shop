import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
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
    private offers: OffersService
  ) { }

  boughtOffers;

  ngOnInit(): void {
    this.user.getCurrentUser()
      .pipe(take(1))
      .subscribe((data: any) => {
        if (data.boughtOffers) {
          this.offers.getOffersByIdArray(data.boughtOffers)
            .pipe(take(1))
            .subscribe((data: any) => {
              this.boughtOffers = data.results;
            })
        } else {
          this.boughtOffers = [];
        }
      });
  }
}
