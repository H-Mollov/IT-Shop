import { createAction, props } from '@ngrx/store';

const authNamespace = '[AUTH]';
export const login = createAction(`${authNamespace} Login`, props<any>());
export const authenticate = createAction(`${authNamespace} Authenticate`, props<any>());