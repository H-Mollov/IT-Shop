import { createAction, props } from '@ngrx/store';

const authNamespace = '[AUTH]';
const offersNamespace = '[OFF]';

export const login = createAction(`${authNamespace} Login`, props<any>());
export const authenticate = createAction(`${authNamespace} Authenticate`, props<any>());
export const offers = createAction(`${offersNamespace} Offers`, props<any>());
export const promotion = createAction(`${offersNamespace} Promotions`, props<any>());
export const bestSellers = createAction(`${offersNamespace} BestSellers`, props<any>());
export const focusedOffer = createAction(`${offersNamespace} FocusedOffer`, props<any>());