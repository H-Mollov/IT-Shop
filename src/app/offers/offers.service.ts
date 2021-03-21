import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment as env } from '../../environments/environment'
import { Store } from '@ngrx/store';
import { offers, promotion, bestSellers, myOffers } from '../+store/actions'
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
  editOfferData;
  sortCriteria = {
    date: "",
    price: "",
    name: ""
  };

  createOffer(offerData) {
    return this.http.post(`${env.apiURL}${env.endPoints.createOffer}`, offerData, { headers: this.offerHeaders });
  }

  filterOffersByCategory(category: string) {
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

  filterOffersByOwner(owner: string) {
    return this.http.get(`${env.apiURL}${env.endPoints.createOffer}/`, {
      headers: this.offerHeaders,
      params: new HttpParams()
        .set('where', `{"owner":"${owner}"}`)
    }).pipe(
      tap((data: any) => {
        this.store.dispatch(myOffers(data))
      }),
      catchError((err) => { throw new Error(err) })
    )
  }

  getOfferById(id: string) {
    return this.http.get(`${env.apiURL}${env.endPoints.createOffer}/`, {
      headers: this.offerHeaders,
      params: new HttpParams()
        .set('where', `{"objectId":"${id}"}`)
    })
  }

  generateOffersUrlEncodedString(idArray) {

    if (idArray.length === 0 || !idArray) {
      return '{"objectId":"0000000000"}';
    }

    let urlString = '{"$or":[';
    idArray.forEach((id) => {
      urlString += `{"objectId":"${id}"},`;
    })
    urlString = urlString.substring(0, urlString.length - 1);
    urlString += ']}'
    return urlString;
  }

  getOffersByIdArray(idArray) {
    const propertyString = this.generateOffersUrlEncodedString(idArray);

    return this.http.get(`${env.apiURL}${env.endPoints.createOffer}/`, {
      headers: this.offerHeaders,
      params: new HttpParams()
        .set('where', propertyString)
    })
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
      catchError((err) => { throw new Error(err) })
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
      catchError((err) => { throw new Error(err) })
    )
  }

  updateOffer(offerId, offerData) {
    return this.http.put(`${env.apiURL}${env.endPoints.createOffer}/${offerId}`, offerData, { headers: this.offerHeaders });
  }

  deleteOffer(offerId) {
    return this.http.delete(`${env.apiURL}${env.endPoints.createOffer}/${offerId}`, { headers: this.offerHeaders });
  }

  showFilteredList(category: string) {
    this.sortCriteria.name = "";
    this.sortCriteria.date = "";
    this.sortCriteria.price = "";
    this.filterOffersByCategory(category).subscribe(() => {
      this.router.navigateByUrl(`offers/${category}`)
    })
  }

  showMyOffers(owner: string) {
    this.filterOffersByOwner(owner).subscribe(() => {
      this.router.navigateByUrl(`/myOffers`);
    })
  }
}
