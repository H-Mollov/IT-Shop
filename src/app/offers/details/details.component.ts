import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { offers, login } from '../../+store/actions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnDestroy {

  constructor(
    private activatdRoute: ActivatedRoute,
    private store: Store
  ) {}

  id = this.activatdRoute.snapshot.params.id;
  currentElement;
  currentOwner: string;
  isLiked: boolean = false;

  findElement = this.store.select(offers).subscribe((data) => {
    this.currentElement = data.offers.currentOffers.results.find(element => element.objectId === this.id);
    console.log(this.currentElement);
  })

  getOwner = this.store.select(login).subscribe((data) => {
    this.currentOwner = data.login.currentUser.userId;
    if (this.currentOwner !== this.currentElement.owner) {
      if (this.currentElement.likes.includes(this.currentOwner)) {
        this.isLiked = true;
      }
    }
  })

  ngOnDestroy(): void {
    this.findElement.unsubscribe();
    this.getOwner.unsubscribe();
  }
}
