import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { login, authenticate, offers } from './actions';

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
);