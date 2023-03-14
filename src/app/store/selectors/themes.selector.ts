import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ThemeReducer } from '../reducers';

const selectThemeState = (state: AppState) => state.theme;

export const themeSelector = createSelector(
    selectThemeState,
    (state: ThemeReducer.State) => state.name
);