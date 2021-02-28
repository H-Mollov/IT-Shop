import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { login, authenticate } from './actions';

export const initialState = {
    currentUser: undefined,
}

export const loginReducer = createReducer(
    initialState,
    on(login, (state, data) => {
        return { ...state, currentUser: data }
    }),
);