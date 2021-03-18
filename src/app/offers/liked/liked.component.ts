import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  likedOffers;

  ngOnInit(): void {
    this.store.subscribe((data: any) => {
      this.likedOffers = data.offers.likedOffers.results;
    })
  }

}
