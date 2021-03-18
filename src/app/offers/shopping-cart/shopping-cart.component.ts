import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  boughtOffers;

  ngOnInit(): void {
    this.store.subscribe((data: any) => {
      this.boughtOffers = data.offers.boughtOffers.results;
    })
  }

}
