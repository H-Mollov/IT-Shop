import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
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
    private user: UserService
  ) { }

  myOffers;

  ngOnInit(): void {
    this.user.getCurrentUser()
      .pipe(take(1))
      .subscribe((data: any) => {
        this.offers.filterOffersByOwner(data.objectId)
        .pipe(take(1))
        .subscribe((data: any) => {
          this.myOffers = data.results;
        })
      });
  }

}
