import { createAction, props } from "@ngrx/store";

export const loadMenu = createAction(
  '[Menu] loadMenu'
);

export const loadMenuSuccess = createAction(
  '[Menu] loadMenuSuccess',
  props<{menu: any}>()
);

export const loadMenuFailure = createAction(
  '[Menu] loadMenuFailure',
  props<{error: any}>()
);