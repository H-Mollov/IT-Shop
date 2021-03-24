import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/user/user.service';
import { focusedOffer, } from '../../+store/actions';
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
    private router: Router,
    private user: UserService,
    private loader: CoreService
  ) { }

  id = this.activatdRoute.snapshot.params.id;
  currentElement;
  currentUser: string;
  currentUserObj;
  isLiked: boolean = false;
  likesCounter: number;
  buyCounter: number;

  ngOnInit(): void {
    this.loader.showLoader();
    this.user.checkSession();

    const findElement = this.offerService.getOfferById(this.id)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.currentElement = data.results[0];
        this.store.dispatch(focusedOffer(this.currentElement));
        this.likesCounter = this.currentElement.likes.length;
        this.buyCounter = this.currentElement.bought;
      })

    if (localStorage.getItem('sessionToken')) {
      const getOwner = this.user.getCurrentUser().subscribe((data: any) => {
        this.currentUserObj = data;
        this.currentUser = data.objectId;
        this.loader.hideLoader();
        if (this.currentUser !== this.currentElement.owner) {
          if (this.currentElement.likes.includes(this.currentUser)) {
            this.isLiked = true;
          }
        }
      });
    }
    this.loader.hideLoader();
  }

  likeOffer(): void {
    this.loader.showLoader();
    const likesArr = Array.from(this.currentElement.likes);
    likesArr.push(this.currentUser);
    this.isLiked = true;
    this.likesCounter++;

    this.offerService.updateOffer(this.id, { likes: likesArr }).subscribe();
    if (this.currentUserObj) {
      const likedOffers = Array.from(this.currentUserObj.likedOffers);
      likedOffers.push(this.currentElement.objectId);

      this.user.updateUser({ likedOffers: likedOffers }, this.currentUserObj.objectId).subscribe();
    }
    this.loader.hideLoader();
  }

  buyOffer(): void {
    this.loader.showLoader();
    const itteratedValue = this.currentElement.bought + 1;
    this.buyCounter++;

    this.offerService.updateOffer(this.id, { bought: itteratedValue }).subscribe(() => {
      this.loader.hideLoader();
    });

    if (this.currentUserObj) {
      const boughtOffers = Array.from(this.currentUserObj.boughtOffers);
      boughtOffers.push(this.currentElement.objectId);

      this.user.updateUser({ boughtOffers: boughtOffers }, this.currentUserObj.objectId).subscribe(() => {
        this.loader.hideLoader();
      });
    }
  }

  deleteOffer(): void {
    this.loader.showLoader();
    this.offerService.deleteOffer(this.id).subscribe(() => {
      this.loader.hideLoader();
      this.router.navigateByUrl('/home');
    });
  }

  editOffer(url: string): void {
    this.offerService.editOfferData = this.currentElement;
    this.router.navigateByUrl(url);
  }

  ngOnDestroy(): void {
  }
}
