import { createAction, props } from "@ngrx/store";

export const loadTheme = createAction('[Theme] Load Theme');
export const loadThemeSuccess = createAction('[Theme] Load Theme Success', props<{ theme: string }>());
export const loadThemeFailure = createAction('[Theme] Load Theme Failure', props<{ error: any }>());