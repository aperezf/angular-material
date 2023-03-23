import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from '../actions';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  login$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(
        (val) => {
            console.log('aquiiii', val);
            return this.authService.login().pipe(
                map(login => AuthActions.loginSuccess({ login })),
                catchError(err => of(AuthActions.loginFailure({ error: err })))
              )
        }
      )
    )
  );

}