import { ActionReducerMap } from '@ngrx/store';
import { AuthReducer } from './reducers';

export interface AuthState {
    auth: AuthReducer.State
}

export const authReducers: ActionReducerMap<AuthState> = {
    auth: AuthReducer.reducer
}