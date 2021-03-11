import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment as env } from '../../environments/environment'
import { Store } from '@ngrx/store';
import { offers, promotion, bestSellers } from '../+store/actions'
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<any>
  ) { }

  offerHeaders = new HttpHeaders({
    'X-Parse-Application-Id': env.applicationID,
    'X-Parse-REST-API-Key': env.restAPIkey,
    'Content-Type': 'application/json'
  })

  filteredOffers;

  createOffer(offerData) {
    return this.http.post(`${env.apiURL}${env.endPoints.createOffer}`, offerData, { headers: this.offerHeaders });
  }

  offerDetails(offerId) {
  }

  filterOffersByCategory(category) {
    return this.http.get(`${env.apiURL}${env.endPoints.createOffer}/`, {
      headers: this.offerHeaders,
      params: new HttpParams()
        .set('where', `{"category":"${category}"}`)
    }).pipe(
      tap((data: any) => {
        this.store.dispatch(offers(data))
      }),
      catchError((err) => { throw new Error(err) })
    )
  }

  getPromoOffers() {
    return this.http.get(`${env.apiURL}${env.endPoints.createOffer}/`, {
      headers: this.offerHeaders,
      params: new HttpParams()
      .set('where', '{"promotion":true}')
    }).pipe(
      tap((data: any) => {
        this.store.dispatch(promotion(data.results))
      }),
      catchError((err) => { throw new Error(err)})
    )
  }

  getBestSellerOffers() {
    return this.http.get(`${env.apiURL}${env.endPoints.createOffer}/`, {
      headers: this.offerHeaders,
      params: new HttpParams()
      .set('limit', '5')
      .set('order', '-bought')
    }).pipe(
      tap((data: any) => {
        this.store.dispatch(bestSellers(data.results))
      }),
      catchError((err) => { throw new Error(err)})
    )
  }

  filterOffersById(offersArray: Array<string>) {
    
  }

  showFilteredList(category: string) {
    this.filterOffersByCategory(category).subscribe(() => {
      this.router.navigateByUrl(`offers/${category}`)
    })
  }

  showOfferDetails(offerId: string) {
    let targetedOffer;
    this.store.select(offers).subscribe(data => targetedOffer = data.offers.currentOffers.results);
  }

  addToCart(offerId: string) {

  }
}
