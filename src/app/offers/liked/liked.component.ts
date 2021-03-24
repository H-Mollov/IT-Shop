import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/user/user.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {

  constructor(
    private offers: OffersService,
    private user: UserService,
    private loader: CoreService
  ) { }

  likedOffers;

  ngOnInit(): void {
    this.loader.showLoader();
    this.user.getCurrentUser()
      .pipe(take(1))
      .subscribe((data: any) => {
        if (data.likedOffers) {
          this.offers.getOffersByIdArray(data.likedOffers)
            .pipe(take(1))
            .subscribe((data: any) => {
              this.likedOffers = data.results;
            })
        } else {
          this.likedOffers = [];
        }
        this.loader.hideLoader()
      });
  }
}
