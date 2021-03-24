import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/user/user.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-myoffers',
  templateUrl: './myoffers.component.html',
  styleUrls: ['./myoffers.component.scss']
})
export class MyoffersComponent implements OnInit {

  constructor(
    private offers: OffersService,
    private user: UserService,
    private loader: CoreService
  ) { }

  myOffers;

  ngOnInit(): void {
    this.loader.showLoader();
    this.user.getCurrentUser()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.offers.filterOffersByOwner(data.objectId)
          .pipe(take(1))
          .subscribe((data: any) => {
            this.myOffers = data.results;
          })
        this.loader.hideLoader();
      });
  }
}
