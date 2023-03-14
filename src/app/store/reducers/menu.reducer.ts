import { createReducer, on } from '@ngrx/store';
import { MenuActions } from '../actions/';

export interface State {
    menu: any;
    opened: boolean;
};

const initialState: State = {
    menu: [],
    opened: true
};

export const reducer = createReducer(
  initialState,
  on(
    MenuActions.loadMenu,
    (state) => ({...state}),
  ),
  on(
    MenuActions.loadMenuSuccess,
    (state, { menu }) => ({...state, menu}),
  ),
  on(
    MenuActions.loadMenuFailure,
    (state, { error }) => ({...state}),
  ),
  on(
    MenuActions.toggleMenu,
    (state) => ({ ...state, opened: !state.opened })
  )
);