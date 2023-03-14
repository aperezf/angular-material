import { Action, createReducer, on } from "@ngrx/store";
import { ThemeActions } from '../actions'

export interface State {
    name: string;
}

export const initialState: State = {
    name: 'light'
}

export const reducer = createReducer(
    initialState,
    on(ThemeActions.loadTheme, state => ({ ...state })),
    on(ThemeActions.loadThemeSuccess, (state, { theme }) => ({ ...state, name: theme })),
    on(ThemeActions.loadThemeFailure, state => ({ ...state })),
);
