import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ThemeState } from '../reducers';

const selectThemeState = (state: AppState) => state.theme;

export const themeSelector = createSelector(
    selectThemeState,
    (state: ThemeState) => state.name
);