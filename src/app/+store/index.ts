import { ActionReducerMap } from '@ngrx/store';
import { loginReducer, offersReducer } from './reducer-functions'

export const reducers: ActionReducerMap<any> = {
    login: loginReducer,
    offers: offersReducer,
}