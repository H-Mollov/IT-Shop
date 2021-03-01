import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { offers } from '../../+store/actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activatdRoute: ActivatedRoute,
    private store: Store
  ) {}

  id = this.activatdRoute.snapshot.params.id;
  currentElement;

  findElement = this.store.select(offers).subscribe((data) => {
    this.currentElement = data.offers.currentOffers.results.find(element => element.objectId === this.id);
    console.log(this.currentElement);
  })

  ngOnInit(): void {
  }

}
