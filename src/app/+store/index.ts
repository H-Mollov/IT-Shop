import { ActionReducerMap } from '@ngrx/store';
import { bestSellersReducer, loginReducer, offersReducer, promotionsReducer } from './reducer-functions'

export const reducers: ActionReducerMap<any> = {
    login: loginReducer,
    offers: offersReducer,
    promotions: promotionsReducer,
    bestSellers: bestSellersReducer,
}