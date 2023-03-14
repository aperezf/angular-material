import { ActionReducerMap } from '@ngrx/store';
import { ThemeReducer, MenuReducer } from './reducers';

export interface AppState {
    theme: ThemeReducer.State
    menu: MenuReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
    theme: ThemeReducer.reducer,
    menu: MenuReducer.reducer
}