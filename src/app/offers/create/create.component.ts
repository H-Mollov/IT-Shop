import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CoreService } from 'src/app/core/core.service';
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
    private loader: CoreService
  ) { }

  id: string = this.activatedRoute.snapshot.params.id ? this.activatedRoute.snapshot.params.id : undefined;
  currentElement = this.offer.editOfferData 
  ? this.offer.editOfferData 
  : this.offer.getOfferById(this.id).subscribe((data: any) => {
    return data.results[0];
  });

  ngOnInit(): void {
  }

  formHandler(formData) {
    this.loader.showLoader();
    if (this.id) { //Update existing Offer
      formData.price = Number(formData.price);
      this.offer.updateOffer(this.id, formData).subscribe(() => {
        this.loader.hideLoader();
        this.router.navigateByUrl('/offers/details/'+ this.id);
      });
    } else { //Create new Offer
      const currentUser = this.store.subscribe((data: any) => {
        formData.owner = data.login.CurrentUser.objectId;
      });

      formData.likes = [];
      formData.bought = 0;
      formData.promotion = false;
      formData.promotionPercentage = 0;

      this.offer.createOffer(formData).subscribe((data: any) => {
        this.loader.hideLoader();
        this.router.navigateByUrl(`/offers/details/${data.objectId}`);
      })
    }
  }

  ngOnDestroy(): void {
    this.id = undefined;
    this.offer.editOfferData = undefined;
  }
}
