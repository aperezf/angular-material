import { createReducer, on } from '@ngrx/store';
import { AppCredential, JWToken } from '../../models/auth.models';
import { AuthActions } from '../actions';

export interface State {
    credential: AppCredential;
    token: JWToken;
    isAunthenticated: boolean
};

const initialState: State = {
    credential: AppCredential.Empty(),
    token: JWToken.Empty(),
    isAunthenticated: false
};

export const reducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state) => ({...state}),
  ),
  on(
    AuthActions.loginSuccess,
    (state, { login }) => ({...state, token: login, isAunthenticated: true}),
  ),
  on(
    AuthActions.loginFailure,
    (state, { error }) => ({...state}),
  ),
);