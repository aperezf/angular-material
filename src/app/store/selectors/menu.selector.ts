import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { MenuReducer } from '../reducers';

const selectMenuState = (state: AppState) => state.menu;

export const menuSelector = createSelector(
  selectMenuState,
    (state: MenuReducer.State) => state.menu
);