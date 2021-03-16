import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../+store/actions'
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private store: Store,
    private offer: OffersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  formHandler(formData) {
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
