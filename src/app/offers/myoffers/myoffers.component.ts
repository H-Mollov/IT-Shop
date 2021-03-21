import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-myoffers',
  templateUrl: './myoffers.component.html',
  styleUrls: ['./myoffers.component.scss']
})
export class MyoffersComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store
  ) { }

  myOffers;

  ngOnInit(): void {
    this.store.subscribe((data: any) => {
      this.myOffers = data.offers.myOffers.results;
    })
  }

}
