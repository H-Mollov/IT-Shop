import { ActionReducerMap } from '@ngrx/store';
import { loginReducer } from './reducer-functions'

export const reducers: ActionReducerMap<any> = {
    login: loginReducer,
}