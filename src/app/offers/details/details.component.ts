import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { offers, login, focusedOffer,  } from '../../+store/actions';
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

  findElement = this.store.select(offers).subscribe((data) => {
    this.currentElement = 
    data.offers.currentOffers.results.find(element => element.objectId === this.id) ||
    data.offers.myOffers.results.find(element => element.objectId === this.id);
    console.log(this.currentElement);
    console.log(data);
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
    const likesArr = this.currentElement.likes;
    likesArr.push(this.currentUser);

    this.offerService.updateOffer(this.id, { likes: likesArr });
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
