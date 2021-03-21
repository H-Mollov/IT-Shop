import { createReducer, on } from '@ngrx/store';
import { login, authenticate, offers, promotion, bestSellers, focusedOffer, myOffers, likedOffers, boughtOffers } from './actions';

export const initialState = {
    currentUser: undefined,
}

export const loginReducer = createReducer(
    initialState,
    on(login, (state, data) => {
        return { ...state, Session: data }
    }),
    on(authenticate, (state, data) => {
        return { ...state, CurrentUser: data };
    })
);

export const offersReducer = createReducer(
    initialState,
    on(offers, (state, data) => {
        return { ...state, currentOffers: data }
    }),
    on(focusedOffer, (state, data) => {
        return { ...state, focusedOffer: data }
    }),
    on(myOffers, (state, data) => {
        return { ...state, myOffers: data }
    }),
    on(likedOffers, (state, data) => {
        return { ...state, likedOffers: data }
    }),
    on(boughtOffers, (state, data) => {
        return { ...state, boughtOffers: data }
    }),
    on(promotion, (state, data) => {
        return { ...state, promotions: data }
    }),
    on(bestSellers, (state, data) => {
        return { ...state, bestSellers: data }
    })
);