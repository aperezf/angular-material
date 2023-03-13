import { Action, createReducer, on } from "@ngrx/store";
import * as themeActions from '../actions'

export interface ThemeState {
    name: string;
}

export const initialState: ThemeState = {
    name: 'light'
}

export const themeReducer = createReducer(
    initialState,
    on(themeActions.loadTheme, state => ({ ...state })),
    on(themeActions.loadThemeSuccess, (state, { theme }) => ({ ...state, name: theme })),
    on(themeActions.loadThemeFailure, state => ({ ...state })),
);
