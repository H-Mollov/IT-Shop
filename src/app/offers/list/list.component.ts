import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { offers } from 'src/app/+store/actions';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private offers: OffersService,
    private store: Store
  ) { }

  currentOffers;
  showDetails = this.offers;

  ngOnInit(): void {
    this.store.select(offers).subscribe((data) => {
      this.currentOffers = data.offers.currentOffers.results;
    })
  }
}
