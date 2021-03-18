import { createReducer, on } from '@ngrx/store';
import { login, authenticate, offers, promotion, bestSellers, focusedOffer, myOffers } from './actions';

export const initialState = {
    currentUser: undefined,
}

export const loginReducer = createReducer(
    initialState,
    on(login, (state, data) => {
        return { ...state, currentUser: data }
    }),
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
);

export const promotionsReducer = createReducer(
    initialState,
    on(promotion, (state, data) => {
        return { ...state, currentPromotions: data }
    })
)

export const bestSellersReducer = createReducer(
    initialState,
    on(bestSellers, (state, data) => {
        return { ...state, currentPromotions: data }
    })
)