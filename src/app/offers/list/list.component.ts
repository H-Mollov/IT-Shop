import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { offers } from 'src/app/+store/actions';
import { UserService } from 'src/app/user/user.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private offers: OffersService,
    private store: Store,
    private user: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentOffers;
  showDetails = this.offers;

  ngOnInit(): void {
    this.user.checkSession();
    this.store.select(offers).subscribe((data) => {
      if (!data.offers.currentOffers) {
        this.offers.filterOffersByCategory(this.activatedRoute.snapshot.params.category).subscribe((data) => {
          this.currentOffers = data.results;
        });
      } else {
        this.currentOffers = data.offers.currentOffers.results;
      }
    })
  }
}
