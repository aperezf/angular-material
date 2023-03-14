import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenuActions } from '../actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MenuService } from '../../theme/services/menu/menu.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuEffects {

  constructor(
    private actions$: Actions,
    private menuService: MenuService
  ) {}

  loadMenu$ = createEffect(
    () => this.actions$.pipe(
      ofType(MenuActions.loadMenu),
      mergeMap(
        () => this.menuService.getMenu().pipe(
          map(menu => MenuActions.loadMenuSuccess({ menu })),
          catchError(err => of(MenuActions.loadMenuFailure({ error: err })))
        )
      )
    )
  );

}