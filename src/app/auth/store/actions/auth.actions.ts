import { createAction, props } from "@ngrx/store";
import { JWToken } from "../../models/auth.models";

export const login = createAction(
  '[Auth] Login',
  props<{credential: Credential}>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{login: JWToken}>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{error: any}>()
);
