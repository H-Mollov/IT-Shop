import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login, offers, focusedOffer } from '../../+store/actions'
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store,
    private offer: OffersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  id: string = this.activatedRoute.snapshot.params.id ? this.activatedRoute.snapshot.params.id : undefined;
  currentElement = this.offer.editOfferData ? this.offer.editOfferData : {};

  ngOnInit(): void {
  }

  formHandler(formData) {
    if (this.id) { //Update existing Offer
      formData.price = Number(formData.price);
      this.offer.updateOffer(this.id, formData).subscribe(() => {
        this.router.navigateByUrl('/offers/'+ formData.category);
      });
    } else { //Create new Offer
      const currentUser = this.store.select(login).subscribe((data) => {
        formData.owner = data.login.currentUser.userId;
      });

      formData.likes = [];
      formData.bought = 0;
      formData.promotion = false;
      formData.promotionPercentage = 0;

      this.offer.createOffer(formData).subscribe({
        next: () => {
          this.router.navigateByUrl(`/home`);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.offer.editOfferData = undefined;
  }
}
