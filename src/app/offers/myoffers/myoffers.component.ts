import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { myOffers } from '../../+store/actions'

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
    this.store.select(myOffers).subscribe((data) => {
      this.myOffers = data.offers.myOffers.results;
    })
  }

}
