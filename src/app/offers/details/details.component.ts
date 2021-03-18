import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { offers, login, focusedOffer, } from '../../+store/actions';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnDestroy, OnInit {

  constructor(
    private activatdRoute: ActivatedRoute,
    private store: Store,
    private offerService: OffersService,
    private router: Router
  ) { }

  id = this.activatdRoute.snapshot.params.id;
  currentElement;
  currentUser: string;
  isLiked: boolean = false;
  likesCounter: number;
  buyCounter: number;

  findElement = this.store.select(offers).subscribe((data) => {
    this.currentElement =
      data.offers.currentOffers.results.find(element => element.objectId === this.id) ||
      data.offers.myOffers.results.find(element => element.objectId === this.id);
      this.likesCounter = this.currentElement.likes.length;
      this.buyCounter = this.currentElement.bought;
    console.log(this.currentElement);
  });

  getOwner = this.store.select(login).subscribe((data) => {
    this.currentUser = data.login.currentUser.userId;
    if (this.currentUser !== this.currentElement.owner) {
      if (this.currentElement.likes.includes(this.currentUser)) {
        this.isLiked = true;
      }
    }
  });

  ngOnInit(): void {
    this.store.dispatch(focusedOffer(this.currentElement));
  }

  likeOffer(): void {
    const likesArr = Array.from(this.currentElement.likes);
    likesArr.push(this.currentUser);
    this.isLiked = true;
    this.likesCounter++;

    this.offerService.updateOffer(this.id, { likes: likesArr }).subscribe();
  }

  buyOffer(): void {
    const itteratedValue = this.currentElement.bought + 1;
    this.buyCounter++;

    this.offerService.updateOffer(this.id, { bought: itteratedValue }).subscribe((data) => {
      console.log(data);
      console.log(this.currentElement);
    });
  }

  deleteOffer(): void {
    this.offerService.deleteOffer(this.id).subscribe(() => {
      this.router.navigateByUrl('/home');
    });
  }

  editOffer(url: string): void {
    this.offerService.editOfferData = this.currentElement;
    this.router.navigateByUrl(url);
  }

  ngOnDestroy(): void {
    this.findElement.unsubscribe();
    this.getOwner.unsubscribe();
  }
}
