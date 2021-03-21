import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { authenticate } from 'src/app/+store/actions';
import { UserService } from 'src/app/user/user.service';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private offers: OffersService,
    private store: Store,
    private user: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentOffers;
  sortCriteria = this.offers.sortCriteria;
  showDetails = this.offers;

  filterOffersByName(): void {
    const offers: any = Array.from(this.currentOffers);
    const sortedOffers = offers.sort((first, second) => {
      if (this.sortCriteria.name === "fas fa-sort-down" || this.sortCriteria.name === "") {
        return first.name.localeCompare(second.name);
      } else {
        return second.name.localeCompare(first.name);
      }
    });

    if (this.offers.sortCriteria.name === "fas fa-sort-down" || this.offers.sortCriteria.name === "") {
      this.offers.sortCriteria.name = 'fas fa-sort-up';
    } else {
      this.offers.sortCriteria.name = 'fas fa-sort-down';
    }
    this.offers.sortCriteria.date = "";
    this.offers.sortCriteria.price = "";
    this.currentOffers = sortedOffers;
  }

  filterOffersByPrice(): void {
    const offers: any = Array.from(this.currentOffers);
    const sortedOffers = offers.sort((first, second) => {
      if (this.offers.sortCriteria.price === "fas fa-sort-down" || this.offers.sortCriteria.price === "") {
        return first.price - second.price;
      } else {
        return second.price - first.price;
      }
    });

    if (this.offers.sortCriteria.price === "fas fa-sort-down" || this.offers.sortCriteria.price === "") {
      this.offers.sortCriteria.price = 'fas fa-sort-up';
    } else {
      this.offers.sortCriteria.price = 'fas fa-sort-down';
    }

    this.offers.sortCriteria.name = "";
    this.offers.sortCriteria.date = "";
    this.currentOffers = sortedOffers;
  }

  filterOffersByDate(): void {
    const offers: any = Array.from(this.currentOffers);
    const sortedOffers = offers.sort((first, second) => {
      const firstDate = new Date(first.createdAt).getTime();
      const secondDate = new Date(second.createdAt).getTime();
      if (this.offers.sortCriteria.date === "fas fa-sort-down" || this.offers.sortCriteria.date === "") {
        return firstDate - secondDate;
      } else {
        return secondDate - firstDate;
      }
    });

    if (this.offers.sortCriteria.date === "fas fa-sort-down" || this.offers.sortCriteria.date === "") {
      this.offers.sortCriteria.date = 'fas fa-sort-up';
    } else {
      this.offers.sortCriteria.date = 'fas fa-sort-down';
    }
    this.offers.sortCriteria.name = "";
    this.offers.sortCriteria.price = "";
    this.currentOffers = sortedOffers;
  }

  ngOnInit(): void {
    this.user.checkSession();

    this.user.getCurrentUser().subscribe((data: any) => {
      const userData = {
        username: data.username,
        objectId: data.objectId,
        likedOffers: data.likedOffers ? data.likedOffers : [],
        boughtOffers: data.boughtOffers ? data.boughtOffers : []
      };
      this.store.dispatch(authenticate(userData));
    });

    this.store
    .subscribe((data: any) => {
      if (!data.offers.currentOffers) {
        this.offers.filterOffersByCategory(this.activatedRoute.snapshot.params.category).subscribe((data) => {
          this.currentOffers = data.results;
        });
      } else {
        this.currentOffers = data.offers.currentOffers.results;
      }
    })
  }
}
